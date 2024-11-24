const Button = ({ onClick, children, className, ...rest }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
