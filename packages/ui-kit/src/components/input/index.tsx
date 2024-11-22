import React, { forwardRef } from "react";
import { InputProps } from "./input.types";
import "./input.style.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  className = "", 
  state = "default", 
  error = false, 
  hint = false, 
  iconLeft = false, 
  iconRight = false, 
  icon,
  message, // Nouveau message
  ...props 
}, ref) => {
  const classNames = [
    "input__default",
    iconLeft ? "input--with-icon-left" : "",
    iconRight ? "input--with-icon-right" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <div className="inputs-container">
      <div className="input-wrapper">
        {iconLeft && (
          <span className="icon-left">
            {typeof icon === 'string' ? <img src={icon} alt="icon-left" /> : icon}
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
          <span className="icon-right">
            {typeof icon === 'string' ? <img src={icon} alt="icon-right" /> : icon}
          </span>
        )}
      </div>
      <div>
        {message && (
          <p className={`input-message ${error ? 'input-message--error' : ''}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
});
