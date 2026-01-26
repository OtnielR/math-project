export default function Navbar() {
    return (
        <>
            <nav className=" w-full h-4 md:h-8 lg:h-10 flex justify-between items-center px-2 md:px-8 py-2 ">
                <section>
                    <p className="text-md lg:text-md">Kelompok 7</p>
                </section>
                <section className="w-2/6 relative hidden md:flex justify-evenly items-center py-3 ">
                    <a className="text-md lg:text-md" href="">Home</a>
                    <p className="text-lg lg:text-2xl">.</p>
                    <a className="text-md lg:text-md" href="">Materi</a>
                    <p className="text-lg lg:text-2xl">.</p>
                    <a className="text-md lg:text-md" href="">Soal</a>
                </section>
                <section>
                    <div className=" bg-black text-white text-sm px-3 py-2 lg:px-4 lg:py-2 rounded-3xl ">
                        Progress: 0%
                    </div>
                </section>
            </nav>
        </>
    )
}
