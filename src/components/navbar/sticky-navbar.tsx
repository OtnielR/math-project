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
        fixed top-0 z-50 w-full h-6 md:h-8 lg:h-10 flex justify-end items-center px-2 md:px-4 lg:px-6 py-8
        transition-all duration-300 ease-out
        ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"}
      `}>

                <section className="">
                    <div className="w-full bg-black text-white text-xs md:text-sm px-4 py-2 rounded-3xl ">
                        <ProgressBar />
                    </div>
                </section>
            </nav>
        </>
    )
}
