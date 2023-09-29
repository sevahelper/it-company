import { Image } from "../image/Image"
import style from '../../styles/Tittle.module.css'

export function Tittle(){
    return(
      <div className={style.boxTittle}>
        <button className={style.titleBtn}>ЕСТЬ ПРОЕКТ?</button>

      </div>
    )
}
