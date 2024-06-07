import { APIResponse, APIResponsePromise } from "@kascad-app/shared-types";

type ApiRequestConfig = RequestInit & { url: string };

const baseUrl = process.env.NEXT_PUBLIC_API_PATH || "";

const request = async <TData>(
  config: ApiRequestConfig
): APIResponsePromise<TData> => {
  const { url, ...options } = config;
  const fullUrl = `${baseUrl}${url}`;

  try {
    const response = await fetch(fullUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options.headers,
      },
      ...options,
    });
    const data: APIResponse<TData> = await response.json();

    if (data && data.success === false) {
      return data;
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
        statusCode: 500,
      };
    }
    return {
      success: false,
      message: "Unexpected error occurred",
      statusCode: 500,
    };
  }
};

export type { ApiRequestConfig };
export default request;
