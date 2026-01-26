import { useEffect, useState } from "react"
import ProgressBar from "./progress-bar"

const minScroll = 150

export default function StickyNavbar() {
    const [visible, setVisible] = useState<Boolean>(false)

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY >= minScroll)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener("scroll", onScroll)

    }, [])


    return (
        <>
            <nav className={`
        fixed top-0 z-50 w-full h-8 md:h-10 flex justify-end items-center px-4 md:px-6 lg:px-8 py-8
        transition-all duration-300 ease-out
        ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"}
      `}>

                <section >
                    <div className="bg-black text-white text-sm px-4 py-2 rounded-3xl ">
                        <ProgressBar />
                    </div>
                </section>
            </nav>
        </>
    )
}
