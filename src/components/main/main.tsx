import JenisJenisKedudukanLingkaranSection from "../section/jenis-jenis-kedudukan-lingkaran"
import QuizJenisJenisKedudukanLingkaran from "../quiz/jenis-jenis-kedudukan-lingkran-quiz"
import LangkahLangkahMenentukanKedudukanGarisSection from "../section/langkah-langkah-menentukan-kedudukan-garis-terhadap-lingkaran"
import { useState } from "react"

export default function Main() {
    const [sectionHiddenSteps, setSectionHiddenSteps] = useState<boolean>(true)

    return (
        <>
            <main className="py-6 px-6 lg:py-8 lg:px-14 flex flex-col gap-4" id="main">
                <div>
                    <JenisJenisKedudukanLingkaranSection />
                    <QuizJenisJenisKedudukanLingkaran setSectionHidden={setSectionHiddenSteps} />
                </div>
                <div className={`transition-all duration-500 ${sectionHiddenSteps ? "opacity-0 hidden" : "opacity-100 block"}`}>
                    <LangkahLangkahMenentukanKedudukanGarisSection />
                </div>

            </main>

        </>
    )
}
