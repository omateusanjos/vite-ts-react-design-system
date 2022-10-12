const Link = ({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
