import { SectionAboutUsBox } from "./SectionAboutUsBox";
import styles from "../../styles/SectionAboutUs.module.css";
 export function SectionAboutUs({anim,i}) {
  return (

    <div id="aboutus" ref={i} className={styles.container}>
      <div>
      <SectionAboutUsBox
      anim={anim}
      variant="puzzle"
      size="resolveBox"
      rounded={["whiteRound","emptyWhiteRoundBr","emptyWhiteRound"]}
      />

      <SectionAboutUsBox
      anim={anim}
      variant="magnit"
      size="importantBox"
      rounded={["blackRound","blackRound","emptyWhiteRound"]}
      />

      <SectionAboutUsBox
      anim={anim}
      variant="shoes"
      size="shoesBox"
      rounded={["whiteRound","whiteRound","whiteRound"]}
      />
      </div>

    </div>
  );
}
