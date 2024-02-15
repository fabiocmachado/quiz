
import cardStyles from "./card.module.css";

export function Card() {
    return (
         
            <div className={cardStyles.card}>
             <header className={cardStyles.cardHeader}>
                <h1 className={cardStyles.cardHeaderTitle}>Test your skills</h1>
            </header>
            <section className={cardStyles.cardBody}>
                <p style={{marginBottom: "32px"}}>Teste os seus conhecimentos!</p>
                <p>FORMS / BUTTON</p>
                <a href ="/game"> Jogar</a>
            </section>
       </div>
        

    );
}