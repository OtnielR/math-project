type OptionButtonProps = {
    text: string
    index: number
    isSelected: boolean
    isCorrect: boolean
    isAnswered: boolean
    onClick: () => void
}

export default function OptionButton({
    text,
    isSelected,
    isCorrect,
    isAnswered,
    onClick
}: OptionButtonProps) {
    let base =
        "w-full text-xs md:text-sm text-black text-left px-4 py-2 rounded-lg border  transition-all duration-300"

    if (!isAnswered) {
        base +=
            "cursor-pointer hover:border-black hover:-translate-y-0.5"
    }

    if (isAnswered && isSelected) {
        base += isCorrect
            ? " bg-green-500 text-white border-green-500"
            : " bg-red-500 text-white border-red-500"
    }

    if (isAnswered && !isSelected) {
        base += " opacity-50"
    }

    return (
        <button
            onClick={onClick}
            disabled={isAnswered}
            className={base}
        >
            {text}
        </button>
    )
}
