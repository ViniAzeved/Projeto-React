import { discoTupac, discoCents, discoEminem, discoRacionais, discoNotorios } from "../../assets/images";
import style from "../../Pages/LandingPage/LandingPage.module.css";

const Destaques = () => {
    return (
        <div className={style.container2}>
            <div className={style.c2Title}>
                <h1>Discos Destaques</h1>
            </div>

            <div className={style.c2Discs}>
                <div className={style.disc}>
                    <img src={discoTupac} alt="Product logo" />
                    <p>2Pac - All Eyez On Me 1996</p>
                </div>
                <div className={style.disc}>
                    <img src={discoCents} alt="Product logo" />
                    <p>50 Cent - Get Rich or Die Tryin’ <br /> 2003</p>
                </div>
                <div className={style.disc}>
                    <img src={discoEminem} alt="Product logo" />
                    <p>Eminem - The Eminem Show <br /> 2002</p>
                </div>
                <div className={style.disc}>
                    <img src={discoRacionais} alt="Product logo" />
                    <p>Racionais Mc’s - Sobrevivendo no inferno <br /> 1997</p>
                </div>
                <div className={style.disc}>
                    <img src={discoNotorios} alt="Product logo" />
                    <p>The Notorious B.I.G - Greatest Hits <br /> 1994 - 2005</p>
                </div>
            </div>
        </div>
    );
}

export { Destaques }