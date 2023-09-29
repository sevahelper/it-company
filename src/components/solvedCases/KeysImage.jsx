import loading from "../../keysImg/loading.jpg";
import mockup from "../../keysImg/mockup.jpg";
import mockupTea from "../../keysImg/mockuptea.jpg";
import brandBook from "../../keysImg/brandbook.jpg";
import laptop from "../../keysImg/laptop.jpg";
import style from '../../styles/KeysImage.module.css'


const resolveTasks =[
  {
    brandBook:{
      title:'Брэндбук для магазина КОМПОТ',
      desc:'Разработали брэндбук для магазина игровых компьютеров',
      client:"КОМПОТ"
    },
    tgBot:{
      title:'Telegram Bot',
      desc:'Разработали Telegram Bot для компании Dicentre',

    },
    design:{
      title:'Сайт компании Wels',
      desc:'Разработали дизайн многостраничного сайта для компании',
      client:"WELS"
    },
    site:{
      title:'Ostap Development',
      desc:'Создание сайта',
    },
    redesign:{
      title:'Конфедерация Городов Комьюнити 2.0',
      desc:'Редизайн и доработка лендинга',

    },
    createSites:{
      title:'Dicenter',
      desc:'Создание сайта',
    },
  }
]



export function KeysImage({variant,keys}){
  const k = resolveTasks[0][keys]
    return(
        <div className={style.image}>
        <img src={variant}  alt={variant} />
        <div className={style.content}>
          <h1>{k.title}</h1>
          <p>
          {k.desc}
          </p>
          {(k.client)?<p>{k.client}</p>:''}
          <button className={style.btnContent}>
            <a href="">Смотреть кейс</a>
          </button>
        </div>
      </div>
    )
}
