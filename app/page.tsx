
import Link from "next/link";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import pageStyles from "./page.module.css";


export default function Page() {
    return (
    <main className={pageStyles.screen} style={ {flex: 1} }>
    <section className={pageStyles.container}>
        <Card

        headerTitle="Test your skills!"
        >
        <p style={{marginBottom: "32px"}}>Test your knowledge about NFL.</p>
        <p style={{marginBottom: "32px"}}></p>
                <form>
                    <div>
                        <input name="playerName"/>
                    </div>   
                        <button>
                                Play
                        </button>   
                     
                </form>
                <Link href ="/game"> Play</Link>
        </Card>
        <Footer />
        </section> 
    </main>
       
    );
  }