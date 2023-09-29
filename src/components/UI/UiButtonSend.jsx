import style from '../../styles/UiButtonSend.module.css'

export function UiButtonSend({variant,children,validation}){
    return(
        <button onClick={(e)=>validation(e)} className={`${style[variant]}`}>
          {children}
        </button>
    )
}
