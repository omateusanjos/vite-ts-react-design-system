interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return <button {...props} />;
};

export default Button;
