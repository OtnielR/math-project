import { useEffect, useState } from "react"

export default function ProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight

            const scrolled = (scrollTop / docHeight) * 100

            // round to nearest integer
            setScrollProgress(Math.round(Math.min(scrolled, 100)))
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div>
            Progress {scrollProgress}%
        </div>
    )
}
