type BlackOverlayProps = {
    className: string
}

export default function BlackOverlay({ className }: BlackOverlayProps) {
    return (
        <>
            <div className={`w-full h-full absolute top-0 z-20 overflow-hidden bg-slate-800  ${className}`}></div>
        </>
    )
}
