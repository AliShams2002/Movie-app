import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  disabled = null,
  className,
  icon = null,
  title = null,
  action = null,
  ariaLabel = null,
  children,
}) => {
  return (
    <>
      {type === "link" ? (
        // Link
        <Link to={action} className={className}>
          {children}
        </Link>
      ) : (
        // Button
        <button
          disabled={disabled}
          type={type}
          className={className}
          onClick={action}
          aria-label={ariaLabel}
        >
          {icon} {title} {children}
        </button>
      )}
    </>
  );
};

export default Button;
