export type InputProps<InputType extends React.ElementType = "input"> =
  React.ComponentPropsWithoutRef<InputType> & CustomInputProps;

export type CustomInputProps = {
  state?: InputState;
  error?: boolean;
  hint?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconLeftImage?: React.ReactNode;  // Propriété pour l'icône gauche
  iconRightImage?: React.ReactNode; // Propriété pour l'icône droite
	iconMsg?: React.ReactNode;
  message?: string;
};

export type InputState = "default" | "active" | "typing" | "filled" | "disabled";
