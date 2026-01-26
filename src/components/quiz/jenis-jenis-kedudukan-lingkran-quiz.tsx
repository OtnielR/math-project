import { useState } from "react"
import quizData from "../../data/quiz-kedudukan-garis-lingkaran.json"
import type { Quiz } from "../../types/quiz"
import Quizs from "../ui/quiz/quiz"
import type { Dispatch, SetStateAction } from "react"

type Props = {
    setSectionHidden: Dispatch<SetStateAction<boolean>>
}

const quiz: Quiz = quizData

export default function QuizJenisJenisKedudukanLingkaran({ setSectionHidden }: Props) {
    const [complete, setComplete] = useState(false)
    const [visible, setVisible] = useState(true)

    const onComplete = () => {
        setComplete(true)

        setTimeout(() => {
            setVisible(false)
            setSectionHidden(false)
        }, 500)
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
