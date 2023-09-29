
import style from '../../styles/Icon.module.css'

export function Icon({rounded ,variant}) {

    const images={
        puzzle:
        "https://thumb.tildacdn.com/tild3431-3936-4165-b763-373230643537/-/resize/68x/-/format/webp/25.png",
      magnit:
        "https://thumb.tildacdn.com/tild6138-3265-4961-b530-316239663237/-/format/webp/17.png",
      shoes:
        "https://thumb.tildacdn.com/tild3031-3364-4462-b137-333638626136/-/resize/80x/-/format/webp/26.png",
    }[variant]

  const icons = {

    whiteRound:
      "https://thumb.tildacdn.com/tild3935-6536-4032-b366-396331326661/-/resize/84x/-/format/webp/24.png",
    blackRound:
      "https://thumb.tildacdn.com/tild3233-3037-4563-b931-316465373835/-/resize/84x/-/format/webp/19.png",
    emptyBlackRound:
      "https://thumb.tildacdn.com/tild3437-6365-4839-a536-613335313531/-/resize/84x/-/format/webp/21.png",
    emptyWhiteRound:
      "https://thumb.tildacdn.com/tild3233-3037-4563-b931-316465373835/-/resize/84x/-/format/webp/19.png",
    emptyWhiteRoundBr:
      "https://thumb.tildacdn.com/tild3963-3964-4230-a664-346533653563/-/resize/84x/-/format/webp/23.png",
  }


  return (
    <>

       <img className={style.icon} width="40px" src={`${images}`} alt={rounded} />
      {rounded.map((image,i)=>{
        return <img className={style.icon} src={icons[image]} alt={image}></img>
      })}
    </>
  );
}
