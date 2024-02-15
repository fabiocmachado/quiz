
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import homeStyles from "./home.module.css";


export default function Page() {
    return (
    <main className={homeStyles.homeScreen} style={ {flex: 1} }>
    <section className={homeStyles.container}>
        <Card />
        <Footer />
        </section> 
    </main>
       
    )
  }