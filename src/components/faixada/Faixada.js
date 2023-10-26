import { logoPrincipal, tupacBackground } from "../../assets/images";
import style from "../../Pages/LandingPage/LandingPage.module.css";

const Faixada = () => {
    return (
        <div className={style.container}>
                    
        <img src={ tupacBackground } alt="2Pac Background" />
        
        <div className={style.content}>
            <div className={style.logoPrincipal}>
                <img src={ logoPrincipal } alt="Default logo" />
            </div>

            <p>The Musical Legacy of the 90s and 2000s, from rap to black.</p>
            
            <div className={style.cButtons}>
                <a className={style.button1} href="">Conheça Nossos Discos</a>
                <a className={style.button2} href="">Escute Nossa Playlist</a>
            </div>
        </div>
    </div>
    );
}

export { Faixada };