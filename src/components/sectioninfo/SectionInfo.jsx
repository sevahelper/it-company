import styles from "../../styles/SectionInfo.module.css";
import { Image } from "../image/Image";
import { UiButtonConsult } from "../UI/UiButtonConsult";

export function SectionInfo({ showForm }) {
  return (
    <div className={styles.sectionInfo}>
      <div className={styles.sectionInfoBox}>
        <Image size="imgAtom" variant="atom"></Image>
        <div className={styles.activeImg}>
          <Image size="digital" variant="digital"></Image>
          <Image size="imgRound" variant="digitRound"></Image>
          <div>
            <p>
              в digi<span className={styles.tic}>&#964;</span>a
              <span className={styles.l}>L</span>
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <h1>uuфровые решения</h1>
            <p>для задач предпринимателей</p>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <UiButtonConsult showForm={showForm} variant="titleBtn" size='digitalBtn'>
          ЕСТЬ ПРОЕКТ?
        </UiButtonConsult>
        <Image size="miniImgAtom" variant="atom"></Image>
      </div>
    </div>
  );
}
