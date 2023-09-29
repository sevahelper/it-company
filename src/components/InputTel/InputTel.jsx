import { useState } from "react";
import style from "../../styles/InputTel.module.css";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


export function InputTel({task,changeTel}) {

  const [state,setState] = useState('')


  return (
    <div className={style.containerBoxTel}>
      <PhoneInput
      className={`${style.formInput} ${style[task]}`}
        placeholder="(999) 999 99 99"
        country="ru"
        onChange={(phone)=>changeTel({phone})}
        value={state.phone}
      >


      </PhoneInput>
    </div>

  );
}
