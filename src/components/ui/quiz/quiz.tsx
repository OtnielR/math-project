import { useState, useEffect } from "react"
import type { Quiz, Question } from "../../../types/quiz"
import OptionButton from "./option-button"

type QuizsProps = {
    quiz: Quiz
    onComplete: () => void
}


export default function Quizs({ quiz, onComplete }: QuizsProps) {
    const [currentQuestion, setCurrentQuestion] = useState<Question>(quiz.questions[0])

    const [selected, setSelected] = useState<number | null>(null)
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)

    const handleSelect = (index: number) => {
        if (answered) return
        setSelected(index)
        setAnswered(true)

        if (currentQuestion.correctAnswer === index) {
            setCorrect(true)
        }


    }

    const handleNextQuestion = () => {
        const nextQuestionIndex = currentQuestion.id
        setAnswered(false)
        setCorrect(false)

        setCurrentQuestion(quiz.questions[nextQuestionIndex])

        console.log("NextQuestionIndex:", nextQuestionIndex)

    }

    const handleRestart = () => {
        setAnswered(false)
        setCorrect(false)
        setCurrentQuestion(quiz.questions[0])
    }

    const handleComplete = () => {
        onComplete()
    }



    useEffect(() => {

    }, [])


    return (
        <>
            <section className="max-h-screen">
                <div className="h-9/10 flex items-center justify-center ">
                    <div className="h-9/10 flex flex-col gap-4 w-full md:w-4/5 lg:w-1/2 rounded-lg rounded-bl-3xl rounded-tr-3xl bg-[#43B869] px-2 md:px-8 py-4">
                        <div className="flex justify-between items-center gap-4 mb-2 px-2">
                            <div >
                                <h1 className="font-semibold text-xs md:text-sm tracking-wide">{quiz.title}</h1>
                            </div>
                            <hr className="flex-1" />
                            <div className="bg-white tracking-widest px-4 py-1 rounded-lg text-xs md:text-sm">
                                {currentQuestion.id}/{quiz.totalQuestions}
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-center gap-2">
                                <h1 className="text-center text-sm md:text-lg font-semibold">{currentQuestion.question}</h1>
                                <div className="w-full  :text-md flex justify-center">
                                    <img className={`w-3/5 md:w-2/5 rounded-xl ${currentQuestion.imageUrl ? "block" : "hidden"}`} src={currentQuestion.imageUrl} />
                                </div>
                                <div className="w-full flex flex-col gap-4 pt-4 px-4">
                                    {currentQuestion.options.map((opt, i) => (
                                        <OptionButton
                                            key={i}
                                            text={opt}
                                            index={i}
                                            isSelected={selected === i}
                                            isCorrect={i === currentQuestion.correctAnswer}
                                            isAnswered={answered}
                                            onClick={() => handleSelect(i)}

                                        />
                                    ))}
                                </div>
                                <div className={`w-full flex justify-end pt-2 ${currentQuestion.id === quiz.totalQuestions ? "hidden" : "flex"}`}>
                                    {answered && correct && (
                                        <button
                                            className="cursor-pointer bg-black text-white px-4 py-1 rounded-lg outline-none"
                                            onClick={handleNextQuestion}
                                        >Next</button>
                                    )}
                                    {answered && !correct && (
                                        <button
                                            className="cursor-pointer bg-red-500 text-white px-4 py-1 rounded-lg outline-none"
                                            onClick={handleRestart}
                                        >Restart</button>
                                    )}
                                </div>
                                <div className={`w-full flex justify-end pt-2 ${currentQuestion.id === quiz.totalQuestions && answered && correct ? "flex" : "hidden"}`}>
                                    <button
                                        className="cursor-pointer bg-black text-white px-4 py-1 rounded-lg outline-none"
                                        onClick={handleComplete}
                                    >Next Section</button>
                                </div>


                                {answered && currentQuestion.explanation && (
                                    <div className="text-xs text-gray-600 px-8 pt-2">
                                        {currentQuestion.explanation}
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
