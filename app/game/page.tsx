"use client"

import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import pageStyles from "../page.module.css" 
import  config  from "../../config.json";
import { Alternative } from "../components/Alternative/";

const questions = config.questions;

export default function GameScreen ( ) {
    const currentQuestion = 0;
    const questionNumber = currentQuestion +1;
    const question = questions[currentQuestion];
    return (
        <main className={pageStyles.screen} style={ {flex: 1} }>
            <section className={pageStyles.container}>
                <Logo />
                <Card
                headerTitle={`Question ${questionNumber} from ${questions.length}`}            
                > 
                <h1>{question.title}</h1>
                <p>{question.description}</p>
                <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}>
                    {question.alternatives.map ((alternative, index) => (
                       <Alternative 
                       key={alternative + index}
                       label={alternative}
                       order= {index}
                       />
                    ))}                    
                    <button>
                        Confirm
                    </button>
                </form>

                </Card>
                <Footer />
            </section>
        </main>
    )
}