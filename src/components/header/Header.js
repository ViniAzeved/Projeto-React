import { logoIniciais } from "../../assets/images";
import style from "../../Pages/LandingPage/LandingPage.module.css";

const Header = () => {

    return (
        <header className={style.header}>
        <div className={style.hCabecalho}>
            <div className={style.logo}>
                <img src={ logoIniciais } alt="Logo" />
            </div>
            
            <div className={style.menu}>
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Contato</a>
                <a href="">Sobre Nós</a>
            </div>

            <div className={style.buttons}>
                <a className={style.buttonLogin} href="">Login</a>
            </div>
        </div>
    </header>
    );
}

export { Header };