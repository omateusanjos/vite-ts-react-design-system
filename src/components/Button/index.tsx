import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";
import styles from "../../styles/Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

const Button = (props: ButtonProps) => {
  const Component = props.asChild ? Slot : "button";
  return <Component className={styles.button} {...props} />;
};

export default Button;
