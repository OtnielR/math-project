type BlurOverlayProps = {
    className: string
}

export default function BlurOverlay({ className }: BlurOverlayProps) {
    return (
        <>
            <div className={`w-full h-full absolute top-0 z-20 overflow-hidden bg-white/50 backdrop-blur-sm ${className}`}></div>
        </>
    )
}
