type Props = {
    title?: string
    children: React.ReactNode
}

export default function OrderedList({ title, children }: Props) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className={`${title ? "block" : "hidden"}`}>{title}</h2>
                <ol className="flex flex-col list-decimal pl-8 gap-2">
                    {children}
                </ol>
            </div>
        </>
    )
}
