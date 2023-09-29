import { InputTel } from "../InputTel/InputTel";
import { UiButtonSend } from "../UI/UiButtonSend";
import { Image } from "../image/Image";
import style from "../../styles/FormBox.module.css";
import { useState } from "react";
import { FormBoxSend } from "./FormBoxSend";

export function FormBox({ showForm, form }) {
  const [formAnim, setFormAnim] = useState("retrt");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [errorValid, setErrorValid] = useState(false);
  const [stateForm,setStateForm] = useState(true)

  const closeTabForm=()=>{
    setName('')
    setTel('')
  }

  const changeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const changeTel = (phone) => {
    console.log(phone)
    setTel(phone.phone);

  };

  const formCondition = (e) => {

    setFormAnim("closeForm");
    showForm(false);
  };

  function validation(e) {

e.preventDefault()
    if (tel.length >= 10 || name.length > 1) {

      setStateForm(false);
    } else {
      setErrorValid(true);
    }
  }

  return (
    <form

      onClick={() => formCondition()}
      className={`${style.form} ${style[formAnim]}`}
      action="#"
    >
      {!stateForm?<FormBoxSend variant="formBoxSend"/>:
          <div onClick={(e) => e.stopPropagation()} className={style.formContainer}>
          <h3>консультация</h3>
          <p>Оставьте заявку, и мы вам перезвоним</p>
          <input
            value={name}
            onChange={(e) => changeName(e)}
            className={style.formInput}
            type="text"
            placeholder="Ваше имя"
          />

          <InputTel  changeTel={changeTel} />
          {errorValid ? (
            <div className={style.formBoxError}>ни одно поле не заполнено</div>
          ) : (
            ''
          )}

          <UiButtonSend validation={validation} variant="sendFormConsult">
            Отправить
          </UiButtonSend>

        </div>}

      <Image closeTabForm={closeTabForm} showForm={showForm} size="closeImg" variant="closeImg"></Image>
    </form>
  );
}
