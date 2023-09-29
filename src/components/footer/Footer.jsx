import {Image} from '../image/Image'
import { Navigation } from '../header/Navigation'

import style from '../../styles/Footer.module.css'

export function Footer(){
    return(
        <div className={style.footerContainer}>
            <Image size="imgLogo" variant="logo"></Image>
            <Navigation></Navigation>
        </div>
    )
}
