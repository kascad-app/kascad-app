export type ButtonProps<ButtonType extends React.ElementType = "button"> =
	React.ComponentPropsWithoutRef<ButtonType> & CustomButtonProps;

export type CustomButtonProps = {
	variant?: ButtonVariant;
	state?: ButtonState;
	size?: ButtonSize;
	loading?: boolean;
};

export type ButtonState = "default" | "hover" | "disabled";
export type ButtonVariant =
	| "primary"
	| "secondary"
	| "tertiary"
	| "dark"
	| "danger"
	| "warning";

export type ButtonSize = "default" | "large";
