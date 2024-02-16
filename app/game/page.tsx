"use client"
import React from "react";
import { useRouter } from "next/navigation"

import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import pageStyles from "../page.module.css" 
import config  from "../../config.json";
import { Alternative } from "../components/Alternative/";

const questions = config.questions;

const answerStates = {
    DEFAULT: "DEFAULT",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS"
} as const;
""
export default function GameScreen ( ) {
    const router = useRouter();
    const [answerState, setAnswerState] = React.useState<keyof typeof answerStates>(answerStates.DEFAULT);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [userAnswers, setUserAnswers]  = React.useState([false]);
    const questionNumber = currentQuestion +1;
    const question = questions[currentQuestion];
    const isLastQuestion = questionNumber === questions.length;

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
                    const $questionInfo = event.target as HTMLFormElement;
                    const formData = new FormData($questionInfo);                    
                    const { alternative } = Object.fromEntries(formData.entries());

                    const isCorrectAnswer =  alternative === question.answer;
                    if (isCorrectAnswer) {
                        setUserAnswers([
                            ...userAnswers,
                            true
                        ]);
                        setAnswerState(answerStates.SUCCESS);
                    }
                    if(!isCorrectAnswer){
                        setUserAnswers([
                            ...userAnswers,
                            false
                        ])
                        setAnswerState(answerStates.ERROR);
                    }
                    setTimeout (() => {
                        if(isLastQuestion) {
                            const totalPoints = userAnswers.reduce ((_totalPoints, currentAnswer) => {
                                if(currentAnswer === true ) return _totalPoints + 1;
                                return _totalPoints;                            
                            }, 0);
                            alert(`The test is finished! Your socre is: ${totalPoints} `);
                            router.push("/");
                            return;
                        }
                    setCurrentQuestion(currentQuestion + 1);
                }, 2*1000 )
                }}>
                    {question.alternatives.map ((alternative, index) => (
                       <Alternative 
                       key={alternative + index}
                       label={alternative}
                       order= {index}
                       />
                    ))}
                    {answerState === answerStates.DEFAULT && (                    
                    <button>
                        Confirm
                    </button>
                    )}
                    <p style={{textAlign: "center"}}>
                        {answerState === answerStates.ERROR && (
                            "❌"
                        )}

                        {answerState === answerStates.SUCCESS && (
                            "✅"
                        )}
                    </p>
                </form>
              </Card>
            <Footer />
            </section>
        </main>
    )
}