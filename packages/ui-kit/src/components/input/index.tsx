import React, { forwardRef } from "react";
import { InputProps } from "./input.types";
import "./input.style.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      state = "default",
      error = false,
      hint = false,
      iconLeft = false,
      iconRight = false,
      iconLeftImage, 
      iconRightImage, 
      message,
      iconMsg,
      ...props
    },
    ref
  ) => {
    const classNames = [
      "input__default",
      iconLeft ? "input--with-icon-left" : "",
      iconRight ? "input--with-icon-right" : "",
      iconMsg ? "input--with-icon-message" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const iconClassNames = (position: "left" | "right" | "msg") =>
      [
        `icon-${position}`,
        state === "disabled" ? "icon-disabled" : "",
      ]
        .filter(Boolean)
        .join(" ");

    return (
      <div className="inputs-container">
        <div className="input-wrapper" data-state={state}>
          {iconLeft && (
            <span className={iconClassNames("left")}>
              {typeof iconLeftImage === "string" ? ( 
                <img src={iconLeftImage} alt="icon-left" />) : (iconLeftImage)
              }             
            </span>
          )}
          <input
            ref={ref}
            className={classNames}
            data-state={state}
            data-error={error}
            aria-invalid={error || undefined}
            data-hint={hint}
            disabled={state === "disabled"}
            {...props}
          />
          {iconRight && (
            <span className={iconClassNames("right")}>
              {typeof iconRightImage === "string" ? (
                 <img src={iconRightImage} alt="icon-right" />) 
                 : (
                  iconRightImage
                 )}        
            </span>
          )}
        </div>
        {message && (
          <p className={`input-message ${error ? "input-message--error" : ""}`}>
            <div className="input-message-img">
              {typeof iconMsg === "string" ? (<img src={iconMsg} />): iconMsg}
              {message}
            </div>
          </p>
        )}
      </div>
    );
  }
);
