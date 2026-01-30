import JenisJenisKedudukanLingkaranSection from "../section/jenis-jenis-kedudukan-lingkaran"
import QuizSection from "../quiz/quiz"
import LangkahLangkahMenentukanKedudukanGarisSection from "../section/langkah-langkah-menentukan-kedudukan-garis-terhadap-lingkaran"
import ContohSoalSection from "../section/contoh-soal"
import quizKedudukanGarisLingkaran from "../../data/quiz-kedudukan-garis-lingkaran.json"
import quizLangkahLangkahMenentukan from "../../data/quiz-langkah-langkah-kedudukan-garis.json"
import { useState } from "react"

type Props = {
    skipQuiz: Function
}

export default function Main({ skipQuiz }: Props) {
    const [sectionHiddenSteps, setSectionHiddenSteps] = useState<boolean>(true)
    const [sectionCompleteSteps, setSectionCompleteSteps] = useState<boolean>(false)
    const [sectionHiddenExample, setSectionHiddenExample] = useState<boolean>(true)
    const [sectionCompleteExample, setSectionCompleteExample] = useState<boolean>(false)


    const setSectionStepsVisible = () => {
        setSectionCompleteSteps(true)

        setTimeout(() => {
            setSectionHiddenSteps(false)
        }, 500)
    }


    const setSectionExampleVisible = () => {
        setSectionCompleteExample(true)

        setTimeout(() => {
            setSectionHiddenExample(false)
        }, 500)
    }

    return (
        <>
            <main className="py-6 px-6 lg:py-8 lg:px-14 flex flex-col gap-4 md:gap-8" id="main">
                <div>
                    <JenisJenisKedudukanLingkaranSection />
                    <QuizSection quiz={quizKedudukanGarisLingkaran} setSectionVisible={setSectionStepsVisible} />
                </div>
                {sectionCompleteSteps && (
                    <div className={`flex flex-col gap-8 transition-all duration-500 ${sectionHiddenSteps
                        ? " opacity-0 translate-y-6" : " opacity-100 translate-y-0"
                        }`}>
                        <LangkahLangkahMenentukanKedudukanGarisSection />
                        <QuizSection quiz={quizLangkahLangkahMenentukan} setSectionVisible={setSectionExampleVisible}></QuizSection>

                    </div>
                )
                }
                {sectionCompleteExample && (
                    <div className={`flex flex-col gap-8 transition-all duration-500 ${sectionHiddenExample
                        ? " opacity-0 translate-y-6" : " opacity-100 translate-y-0"
                        }`}>
                        <ContohSoalSection />

                    </div>
                )
                }



            </main >

        </>
    )
}
