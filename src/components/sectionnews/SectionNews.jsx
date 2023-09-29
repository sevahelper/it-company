import style from "../../styles/SectionNews.module.css";
import robotImg from "../../img/robot.jpg";


 export function SectionNews() {
  return (
    <div className={style.newsContainer}>
      <div className={style.news}>
        <h2 >НОВОСТИ</h2>
      </div>
      <div className={style.newsBox}>
        <img src={robotImg} alt="robot" />
        <div className={style.newsBoxContainer}>
          <h3>Telegram Bot для Оптовых продаж</h3>

          <p>
            Парсер прайса, автоматическая отправка прайса покупателям и как
            дополнительная функция - формирование оптового фида для рекламы.
          </p>
          <p>28 .07 .2023</p>
        </div>
      </div>
    </div>
  );
}
