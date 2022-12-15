import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  const handleChange = () => {
    let theme = getTheme();
    let newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("page.theme", `${newTheme}`);
    document.documentElement.setAttribute("color-scheme", `${newTheme}`);
    setChecked((prevState) => !prevState);
  };

  useEffect(() => {
    let theme = getTheme();
    document.documentElement.setAttribute("color-scheme", `${theme}`);
  }, []);

  const getTheme = () => {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    if (localStorage.getItem("page.theme")) {
      theme = localStorage.getItem("page.theme");
    }
    return theme;
  };
  return (
    <header className={`${showMenu ? styles["show-nav"] : null}`}>
      <div className={styles.logo}>
        <span> Moises.L() </span>
      </div>
      <button onClick={showMenuHandler} className={styles["menu-btn"]}>
        <SlMenu />
      </button>
      <nav>
        <ul>
          <li className={styles.item0}>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              to="/"
            >
              {" "}
              Home{" "}
            </NavLink>{" "}
          </li>
          <li className={styles.item1}>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              to="/education"
            >
              {" "}
              Education and Certifications{" "}
            </NavLink>{" "}
          </li>
          <li className={styles.item2}>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              to="/experience"
            >
              {" "}
              Experience{" "}
            </NavLink>{" "}
          </li>
          <li className={styles.item3}>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              to="/projects"
            >
              {" "}
              Projects{" "}
            </NavLink>{" "}
          </li>
          <li className={styles.item4}>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.navLink
              }
              to="/contact"
            >
              {" "}
              Contact & Resume{" "}
            </NavLink>{" "}
          </li>
          <Switch
            className={styles.switch}
            onChange={handleChange}
            checked={checked}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
