import style from "../../styles/SolvedCases.module.css";
import brandBook from "../../keysImg/brandbook.jpg";
import laptop from "../../keysImg/laptop.jpg";
import loading from "../../keysImg/loading.jpg";
import mockup from "../../keysImg/mockup.jpg";
import mockupTea from "../../keysImg/mockuptea.jpg";

import {KeysImage} from './KeysImage'




export function SolvedCases() {
  return (
    <div id="cases" className={style.casesContainer}>
      <h1>КЕЙСЫ</h1>
      <div className={style.wrapper}>
        <div className={style.wrapperContainer}>
       <KeysImage keys ='brandBook' variant={loading}></KeysImage>
        <KeysImage keys='design' variant={mockup}></KeysImage>
        <KeysImage keys='redesign' variant={mockupTea}></KeysImage>
        </div>
        <div className={style.wrapperContainer}>
        <KeysImage keys='tgBot' variant={laptop}></KeysImage>
        <KeysImage keys='site' variant={brandBook}></KeysImage>
        <KeysImage keys='createSites' variant={loading}></KeysImage>
        </div>
      </div>
    </div>
  );
}
