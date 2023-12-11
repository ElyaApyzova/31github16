import React from "react";
import { data } from "../../data";
import { Home } from "react-router-dom";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div style={styles.container}>
      {data.map((link, id) => {
        return (
          <Link key={id} to={link.route} style={styles.link}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    margin: "0 auto",
    padding: " 0 100px",
    background: "brown",
    display: "flex",
    width: "1240px",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
  link: {
    margin: "5px",
    textDecoration: "none",
    color: "white",
  },
};
