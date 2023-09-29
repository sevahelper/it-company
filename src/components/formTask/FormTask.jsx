import style from "../../styles/FormTask.module.css";
import { useState } from "react";
import { InputTel } from "../InputTel/InputTel";
import { FormBoxSend } from "../formBox/FormBoxSend";
import { Image } from "../image/Image";
import { UiButtonSend } from "../UI/UiButtonSend";


export function FormTask({task,setTask}) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const [errorForm, setErrorForm] = useState(false);
  const [stateForm, setStateForm] = useState(false);


  const changeTel = (phone) => {
    console.log(phone)
    setTel(phone.phone);

  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeTask = (e) =>{
    setTask(e.target.value)
  }

  function validation() {


    if (tel.length >= 10 || name.length > 1 || task.length > 1) {
      setStateForm(true);
      setErrorForm(false);
    } else {
      setStateForm(false);
      setErrorForm(true);
    }
  }

  function closeTabForm(){
     setErrorForm(false)
     setStateForm(false)
  }

  return (
    <div className={style.taskForm}>

      <input
        onChange={(e) => changeName(e)}
        value={name}
        className={style.taskFormInput}
        type="text"
        placeholder="Имя"
      />

      <InputTel

        changeTel={changeTel}
        task={"whiteBorder"}
      ></InputTel>

      <input
        onChange={(e) => changeTask(e)}
        value={task}
        className={style.taskFormInput}
        type="text"
        placeholder="Задача"
      />
      <UiButtonSend validation={validation} variant="sendForm">
        Отправить
      </UiButtonSend>

      {stateForm ? (
        <div className={style.errorForm}>
        <p> данные успешно отправлены</p>
        <div>
        <Image closeTabForm={closeTabForm} size="errorForm" variant="closeImg"></Image>
        </div>

      </div>
      ) :''}

      {errorForm ? (
        <div className={style.errorForm}>
        <p> не корректно заполнены поля</p>
        <div>
        <Image closeTabForm={closeTabForm} size="errorForm" variant="closeImg"></Image>
        </div>

      </div>
      ) :''}
    </div>
  );
}
