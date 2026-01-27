import { useState } from "react"
import type { Quiz } from "../../types/quiz"
import Quizs from "../ui/quiz/quiz"

type Props = {
    setSectionVisible: Function
    quiz: Quiz
}


export default function QuizSection({ quiz, setSectionVisible }: Props) {
    const [complete, setComplete] = useState(false)
    const [visible, setVisible] = useState(true)

    const onComplete = () => {
        setComplete(true)

        setTimeout(() => {
            setVisible(false)
            setSectionVisible()
        }, 1000)
    }

    return (
        <>
            {visible && (
                <div
                    className={`
            transition-all duration-500 ease-in-out
            ${complete
                            ? "opacity-0 translate-y-6"
                            : "opacity-100 translate-y-0"}
          `}
                >
                    <Quizs quiz={quiz} onComplete={onComplete} />
                </div>
            )}

        </>
    )
}
