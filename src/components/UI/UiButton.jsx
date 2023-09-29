import { useState } from 'react'
import clsx from 'clsx'
import styles from '../../styles/UiButton.module.css'

const BTN_TASKS_CHILDREN=[
   'ВИДЕОПРОДАКШН','ДИЗАЙН','МАРКЕТПЛЕЙСЫ','КОНТЕКСТНАЯ РЕКЛАМА',
   'ТАРГЕТИРОВАННАЯ РЕКЛАМА','SEO','ВЕБ-АНАЛИТИКА','САЙТ/ИНТЕРНЕТ-МАГАЗИН',
   'SMM'
]

export function UiButton({ variant,autoChoiceTask }){



    return(
      <div className={styles.UiBtnContainer}>
        {BTN_TASKS_CHILDREN.map((child,i)=>{
            return(<button key={i} onClick={()=>autoChoiceTask(child)} className={`${styles[variant]}`}>{child}</button>)
        })}
      </div>

    )
}
