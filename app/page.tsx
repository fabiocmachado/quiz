import cardStyles from "./card.module.css";
import homeStyles from "./home.module.css";

export default function Page() {
    return (
    <main className={homeStyles.homeScreen} style={ {flex: 1} }>
        <div className={cardStyles.card}>
             <header className={cardStyles.cardHeader}>
                <h1 className={cardStyles.cardHeaderTitle}>Test your skills</h1>
            </header>
            <section className={cardStyles.cardBody}>
            <p>SomeTEXT</p>
            <p>FORMS / BUTTON</p>
            </section>
       </div>
       <footer>
        <p>
        Designed by Fábio Machado
        </p>
        </footer>
    </main>
       
    )
  }