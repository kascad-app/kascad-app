import React from "react";
import { ButtonProps } from "./button.types";
import "./button.style.css";

export const Button: React.FC<ButtonProps> = ({
	className,
	variant = "primary",
	state = "default",
	size = "default",
	children,
	loading = false,
	...props
}) => {
	const classNames = ["btn__default", className].filter(Boolean).join(" ");

	return (
		<button
			{...props}
			className={classNames}
			data-state={state}
			data-variant={variant}
			data-size={size}
			disabled={state === "disabled"}>
			{children}
		</button>
	);
};
