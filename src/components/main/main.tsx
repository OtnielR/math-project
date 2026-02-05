import JenisJenisKedudukanLingkaranSection from "../section/jenis-jenis-kedudukan-lingkaran"
import QuizSection from "../quiz/quiz"
import LangkahLangkahMenentukanKedudukanGarisSection from "../section/langkah-langkah-menentukan-kedudukan-garis-terhadap-lingkaran"
import ContohSoalSection from "../section/contoh-soal"
import quizKedudukanGarisLingkaran from "../../data/quiz-kedudukan-garis-lingkaran.json"
import quizLangkahLangkahMenentukan from "../../data/quiz-langkah-langkah-kedudukan-garis.json"
import quizKedudukanGarisLingkaranSoal from "../../data/quiz-kedudukan-garis-lingkaran-soal.json"
import { useEffect, useState } from "react"

type Props = {
    isSkipQuiz: Boolean
}


export default function Main({ isSkipQuiz }: Props) {
    const [sectionHiddenSteps, setSectionHiddenSteps] = useState<boolean>(true)
    const [sectionCompleteSteps, setSectionCompleteSteps] = useState<boolean>(false)
    const [sectionHiddenExample, setSectionHiddenExample] = useState<boolean>(true)
    const [sectionCompleteExample, setSectionCompleteExample] = useState<boolean>(false)
    const [sectionHiddenQuiz, setSectionHiddenQuiz] = useState<boolean>(true)
    const [sectionCompleteQuiz, setSectionCompleteQuiz] = useState<boolean>(false)


    const skipQuizHandler = () => {
        setSectionStepsVisible()
        setSectionExampleVisible()
    }


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

    const setSectionQuizVisible = () => {
        setSectionCompleteQuiz(true)

        setTimeout(() => {
            setSectionHiddenQuiz(false)
        }, 500)
    }

    useEffect(() => {
        if (isSkipQuiz) {
            skipQuizHandler()
        }
    })

    return (
        <>
            <main className="py-6 px-4 lg:py-8 lg:px-14 flex flex-col gap-10 md:gap-14" id="main">
                <div>
                    <JenisJenisKedudukanLingkaranSection />
                    <div className={`${sectionCompleteSteps ? "hidden" : "block"}`}>
                        <QuizSection quiz={quizKedudukanGarisLingkaran} setSectionVisible={setSectionStepsVisible} />
                    </div>
                </div>
                {sectionCompleteSteps && (
                    <div className={`flex flex-col gap-8 transition-all duration-500 ${sectionHiddenSteps
                        ? " opacity-0 translate-y-6" : " opacity-100 translate-y-0"
                        }`}>
                        <LangkahLangkahMenentukanKedudukanGarisSection />

                        <div className={`${sectionCompleteSteps ? "hidden" : "block"}`}>
                            <QuizSection quiz={quizLangkahLangkahMenentukan} setSectionVisible={setSectionExampleVisible}></QuizSection>
                        </div>

                    </div>
                )
                }
                {sectionCompleteExample && (
                    <div className={`flex flex-col gap-8 transition-all duration-500 ${sectionHiddenExample
                        ? " opacity-0 translate-y-6" : " opacity-100 translate-y-0"
                        }`}>
                        <ContohSoalSection />
                        <QuizSection quiz={quizKedudukanGarisLingkaranSoal} setSectionVisible={setSectionQuizVisible}></QuizSection>

                    </div>
                )
                }


                {sectionCompleteQuiz && (
                    <div
                        className={`flex flex-col items-center justify-center text-center gap-4 py-20 transition-all duration-500
      ${sectionHiddenQuiz
                                ? "opacity-0 translate-y-6"
                                : "opacity-100 translate-y-0"
                            }`}
                    >
                        <h2 className="text-2xl font-semibold">
                            🎉 Semua Quiz Selesai!
                        </h2>

                        <p className="text-gray-600 max-w-md">
                            Kamu sudah menyelesaikan seluruh materi dan latihan.
                            Semoga sekarang konsep kedudukan garis terhadap lingkaran sudah lebih jelas.
                        </p>

                        <p className="text-sm text-gray-400">
                            Terima kasih sudah belajar sampai akhir ✨
                        </p>
                    </div>
                )}



            </main >

        </>
    )
}
