import closeImg from '../../img/close.png'
import styles from '../../styles/Image.module.css'

export function Image({ size, variant,closeTabForm }) {

   function checkCloseTabForm(){
    if(closeTabForm){
      closeTabForm()
    }
   }

  const imgSrc = {
    closeImg:closeImg,
    logo:
    "https://static.tildacdn.com/tild3638-3339-4261-a639-343132333732/Frame_16.png",
    digital:
      "https://thumb.tildacdn.com/tild3335-3331-4634-a237-656439323561/-/resize/754x/-/format/webp/8.png",
    atom:
     "https://thumb.tildacdn.com/tild6564-6638-4139-a232-666531376462/-/resize/824x/-/format/webp/5.png",

     digitRound:"https://thumb.tildacdn.com/tild3939-6434-4066-a435-353964313462/-/format/webp/9.png",

     miniImgAtom:"https://thumb.tildacdn.com/tild6332-6431-4562-b937-346338366238/-/resize/620x/-/format/webp/7.png",
    }[variant];

  return <img onClick={()=>checkCloseTabForm()} className={styles[size]} src={imgSrc} alt={variant} />;
}
