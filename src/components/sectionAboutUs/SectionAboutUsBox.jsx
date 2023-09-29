import styles from "../../styles/SectionAboutUsBox.module.css";
import { Icon } from "../UI/Icon";
import clsx from "clsx";
export function SectionAboutUsBox({ size, variant, rounded, icons, text ,anim}) {

  const style = clsx("", size,);
console.log(anim)
  return (
    
     <div className={`${styles[style]} ${anim?styles.animBox:''}`}>
      <div className={styles.icons}>
        <Icon variant={variant} rounded={rounded} ></Icon>
      </div>
      <h3 className={styles.titleAboutUs}>РЕШЕНИЕ...</h3>
      <p className={styles.textAboutUs}>
        Решение задач других предпринимателей нам позволяет привлекать
        дополнительные средства ﻿в нашу компанию и иметь огромную практику и
        экспертность, чего лишены компании решающие 1-2 конкретные задачи.
      </p>
    </div>


  );
}
