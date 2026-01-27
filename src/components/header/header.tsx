import Navbar from "../navbar/navbar"

export default function Header() {
    return (
        <>
            <header className="relative w-full min-h-screen flex flex-col p-3 py-6 md:p-4 md:py-4 gap-5 md:gap-4">
                <Navbar></Navbar>
                <div className="w-full h-full bg-[#43B869] rounded-xl flex-1 flex flex-col-reverse gap-6 md:gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-12 py-6 lg:py-8">
                    <div className="col-span-1 lg:col-span-2" id="left">
                        <div className="lg:w-4/5 h-full flex flex-col justify-center gap-2 md:gap-4 px-4">
                            <div className="border-b border-gray-600 pb-4 md:pb-6">
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide text-center md:text-left">Quizs</h1>
                            </div>
                            <div className="border-b border-gray-600 pb-4 md:pb-6 mb-2">
                                <p className="text-xs/6 lg:text-sm/6 tracking-wide line-clamp-2 lg:line-clamp-none text-center md:text-left">Kedudukan garis terhadap lingkaran — materi dan kuis interaktif. Pahami konsep kedudukan garis terhadap lingkaran dengan materi Matematika Kelas 11 yang sederhana dan kuis interaktif untuk latihan. </p>
                            </div>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a className="bg-black text-white text-sm px-4 py-2 lg:text-md lg:px-8 lg:py-3 rounded-3xl font-light " href="#main">Start</a>
                                <a className="bg-transparent text-black border border-black text-sm px-4 py-2 lg:text-md lg:px-8 lg:py-3  rounded-3xl font-light hover:border-gray-600 transition-border " href="">Jump to Quiz</a>

                            </div>
                        </div>
                    </div>
                    <div id="right" className="flex justify-center items-center">
                        <img className="w-3/5 md:w-4/5 lg:w-full " src="/geometry-pattern.png" alt="" />

                    </div>
                </div>

            </header>
        </>
    )
}
