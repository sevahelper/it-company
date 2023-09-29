
import style from '../../styles/UiButtonConsult.module.css'

export function UiButtonConsult({showForm,variant,children,size}){

   function formCondition(){
      showForm(true)
   }

    return(
        <button onClick={()=>formCondition()} className={`${style[variant]} ${style[size]}`}>
             {children}
        </button>
    )
}
