import Card from "./card"

type CardItemProps = {
    title?: string
    className?: string
    imageUrl: string
    children: React.ReactNode
}

export default function CardItem({ title, className, imageUrl, children }: CardItemProps) {
    return (
        <>
            <Card title={title} className={className}>
                <div className=" flex justify-center items-center p-4">
                    <img className="w-4/5 rounded-xl" src={imageUrl} alt={title} />
                </div>
                <div className=" flex flex-col gap-2">
                    {children}
                </div>
            </Card>

        </>
    )
}
