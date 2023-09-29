import style from '../../styles/FormBoxSend.module.css'

export function FormBoxSend({variant}){
    return(
        <div className={style[variant]}>
            Спасибо,данные успешно отправлены
          </div>
    )
}
