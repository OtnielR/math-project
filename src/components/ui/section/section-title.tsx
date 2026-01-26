type SectionTitleProps = {
    title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <>
            <div>
                <h1 className="text-md md:text-xl lg:text-2xl font-semibold">{title}</h1>
            </div>

        </>
    )
}
