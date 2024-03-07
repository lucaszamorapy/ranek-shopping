import styles from "./Header.module.css";
import dataLinks from "../../config/navigation.json";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <ul>
          {dataLinks.links.map((link, index) => (
            <li key={index}>
              <NavLink className={styles.link} to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
