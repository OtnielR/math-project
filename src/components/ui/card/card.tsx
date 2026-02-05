type CardProps = {
    title?: string
    className?: string
    children: React.ReactNode
}

export default function Card({ title, className, children }: CardProps) {
    return (
        <>
            <div className={`px-2 py-2 md:px-8 md:py-6 rounded-xl flex flex-col gap-2 shadow-sm md:shadow-md tracking-wide
                            transition-all duration-300 ease-out
                            hover:-translate-y-1
                            hover:scale-[1.02]
                            hover:shadow-md hover:shadow-black/10 ${className}`}>
                <div>
                    <h1 className="text-sm tracking-wide font-semibold">{title}</h1>
                </div>
                <div className="flex flex-col">
                    {children}
                </div>
            </div>
        </>
    )
}
