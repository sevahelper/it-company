import style from "../../styles/SectionContacts.module.css";
import { FormTask } from "../formTask/FormTask";
import { Icon } from "../UI/Icon";
import { useState } from "react";
export function SectionContacts() {
  const [task, setTask] = useState("");

  const autoChoiceTask = (value) => {
    setTask(value);
  };
  return (
    <div id="services" className={style.contactsContainer}>
      <div className={style.socialBox}>
        <h2>Контакты</h2>
        <p>+7928 441 65 94</p>
        <button className={style.socialBtn}><a href="https://t.me/ostapInformationtechnology">Telegram</a></button>
        <button className={style.socialBtn}><a href="#">ВКОНТАКТЕ</a></button>
      </div>
      <FormTask setTask={setTask} task={task}></FormTask>
    </div>
  );
}
