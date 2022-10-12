import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

const Button = (props: ButtonProps) => {
  const Component = props.asChild ? Slot : "button";
  return <Component {...props} />;
};

export default Button;
