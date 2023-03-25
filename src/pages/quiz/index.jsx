import './index.scss';
import React from 'react'
import {questions} from "./questions";

function Result({correct, onClickStart}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>

            <button onClick={onClickStart}>Попробовать снова</button>
        </div>
    );
}

function Game({step, question, onClickVariant}) {
    const percentage = Math.round(step/questions.length * 100);
    console.log(percentage)
    return (
        <div>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => (
                        <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
                    ))
                }

            </ul>
        </div>
    );
}

export function QuizPage() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);

    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const onClickStart = () => {
        setStep(0);
        setCorrect(0)
    }

    return (
        <div className="Quiz">
            {
                step !== questions.length ? ( <Game step={step} question={question} onClickVariant={onClickVariant}/>
            ) : (
                <Result onClickStart={onClickStart} correct={correct}/>
                )
            }
        </div>
    )
}