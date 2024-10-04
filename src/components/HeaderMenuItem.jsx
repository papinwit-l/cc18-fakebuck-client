import React from "react";
import { Link } from "react-router-dom";

function HeaderMenuItem(props) {
  const { icon: Icon, to, ...restProps } = props;
  return (
    <Link to={to} {...restProps}>
      {Icon ?? <Icon />}
    </Link>
  );
}

export default HeaderMenuItem;
