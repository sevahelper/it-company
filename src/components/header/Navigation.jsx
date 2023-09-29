import styles from "../../styles/Navigation.module.css";

import { useRef } from "react";
const menu = [
  {
    id: 0,
    title: "aboutUs",
    children: "о нас",
  },
  {
    id: 1,
    title: "service",
    children: "услуги",
  },
  {
    id: 2,
    title: "keys",
    children: "кейсы",
  },
  {
    id: 3,
    title: "contacts",
    children: "контакы",
  },
];

export function Navigation({
  handleClick,
  showForm,
  scrollToSection,
  clientTask,
  setCurrentBox,
}) {





  return (
    <nav className={styles.navigation}>
      <ul className={styles.ul}>


            <li  >
              <a  href="#aboutus">О НАС</a>
            </li>
            <li  >
              <a  href="#services">УСЛУГИ</a>
            </li>
            <li  >
              <a  href="#cases">КЕЙСЫ</a>
            </li>
            <li  >
              <a  href="#contacts">КОНТАКТЫ</a>
            </li>


      </ul>
    </nav>
  );
}
