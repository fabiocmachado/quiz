"use client";

import Link from "next/link";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import pageStyles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Page() {

const router = useRouter();
        
return (
<main className={pageStyles.screen} style={ {flex: 1} }>
        <section className={pageStyles.container}>
        <Card

        headerTitle="Test your skills!"
        >
        <p style={{marginBottom: "32px"}}>Test your knowledge about NFL.</p>
        <p style={{marginBottom: "32px"}}></p>
                <form 
                 onSubmit = {(event) => {
                        event.preventDefault();

                        const name: string = "";
                        router.push(`/game?player=${name}`)}
                }>
                             
                    <div style={{marginBottom: "24px"}}>
                    
                            <input type="text" placeholder="Player name" id="playerName" name="playerName"/>
                    
                    </div>   
                        <button>
                                Play
                        </button>   
                     
                </form>
              
        </Card>
        <Footer />
        </section> 
    </main>
       
    );
  }