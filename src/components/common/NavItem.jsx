import { Link } from "react-router-dom";

const NavItem = ({ type = "header", to, title }) => {
  const itemClass =
    type === "header"
      ? "hover:text-red-400 transition-colors hidden md:block"
      : "hover:text-red-400 transition";

  return (
    <li>
      <Link to={to} className={itemClass}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
