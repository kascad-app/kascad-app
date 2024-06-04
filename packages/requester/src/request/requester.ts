import { APIResponsePromise } from "@kascad-app/shared-types";
import request, { ApiRequestConfig } from "./request";

type HttpMethod = <TData>(
  url: string,
  options?: ApiRequestConfig
) => APIResponsePromise<TData>;

type RequestResponse = {
  get: HttpMethod;
  post: HttpMethod;
  put: HttpMethod;
  delete: HttpMethod;
};

const requester = (auth = true): RequestResponse => {
  let baseOptions: Partial<ApiRequestConfig> = {};

  if (auth) {
    baseOptions.credentials = "include"; // Include credentials only if auth is true
  }

  const get: HttpMethod = <TData>(url: string, options?: ApiRequestConfig) =>
    request<TData>({ url, method: "GET", ...options });

  const post: HttpMethod = <TData>(url: string, options?: ApiRequestConfig) =>
    request<TData>({ url, method: "POST", ...options });

  const put: HttpMethod = <TData>(url: string, options?: ApiRequestConfig) =>
    request<TData>({ url, method: "PUT", ...options });

  const del: HttpMethod = <TData>(url: string, options?: ApiRequestConfig) =>
    request<TData>({ url, method: "DELETE", ...options });

  return { get, post, put, delete: del };
};

export { requester };
