const Button = ({
  type = "button",
  disabled = null,
  className,
  icon,
  title,
  action = null,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={action}
    >
      {icon} {title}
    </button>
  );
};

export default Button;
