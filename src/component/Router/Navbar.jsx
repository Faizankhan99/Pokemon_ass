import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../All.module.css";

export default function Navbar() {
  const nav = [{ id: 1, title: "HOME", to: "/" }];
  return (
    <Box className={style.nav_main}>
      {nav.map((elem) => (
        <NavLink
          key={elem.id}
          to={elem.to}
          className={({ isActive }) =>
            !isActive ? style.active : style.default
          }
        >
          HOMEPAGE
        </NavLink>
      ))}
    </Box>
  );
}
