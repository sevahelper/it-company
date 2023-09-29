import { Navigation } from "./Navigation";
import { UiButtonConsult } from "../UI/UiButtonConsult";
import { Image } from "../image/Image";

import styles from "../../styles/Header.module.css";



export function Header({
  showForm,
  scrollToSection,
  aboutUs,
  keys,
  clientTask,
  contact,
  setCurrentBox,
}) {

  const closeTabForm =()=>{
    return null
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image size="imgLogo" variant="logo"></Image>
        <div className={styles.navigation}>

          <Navigation
            scrollToSection={scrollToSection}
            aboutUs={aboutUs}
            keys={keys}
            clientTask={clientTask}
            contact={contact}
            setCurrentBox={setCurrentBox}
          ></Navigation>

          <UiButtonConsult closeTabForm={closeTabForm} showForm={showForm} variant="headerBtn">
            КОНСУЛЬТАЦИЯ
          </UiButtonConsult>

        </div>
      </div>
    </header>
  );
}
