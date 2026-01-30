import SectionTitle from "../ui/section/section-title"
import CardItem from "../ui/card/card-item"

export default function JenisJenisKedudukanLingkaranSection() {
    return (
        <>
            <section className="flex flex-col gap-8">
                <SectionTitle title="Jenis-Jenis Kedudukan Garis Terhadap Lingkaran"></SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 gap-8 md:px-4 md:gap-6 lg:px-8 lg:gap-10 mb-4">
                    <CardItem title="Memotong Lingkaran" imageUrl="/kedudukan-memotong-lingkaran-1.png">
                        <h2 className="text-sm">Garis <b>Memotong </b>Lingkaran Jika</h2>
                        <div className="text-xs md:text-sm pl-4 ">
                            <ul className="list-disc">
                                <li>Garis <b>masuk ke dalam lingkaran</b></li>
                                <li>Terjadi <b>dua titik potong</b></li>
                            </ul>

                        </div>
                    </CardItem>
                    <CardItem title="Menyinggung Lingkaran" imageUrl="/kedudukan-menyinggung-lingkaran-1.png">
                        <h2 className="text-sm">Garis <b>Menyinggung </b>Lingkaran Jika</h2>
                        <div className="text-xs md:text-sm pl-4 ">
                            <ul className="list-disc">
                                <li>Garis <b>tidak memotong lingkaran</b></li>
                                <li>Garis <b>tidak masuk lingkaran</b></li>
                            </ul>

                        </div>

                    </CardItem>
                    <CardItem title="Tidak Memotong Lingkaran" imageUrl="/kedudukan-tidak-memotong-lingkaran-1.png">
                        <h2 className="text-sm">Garis Tidak <b>Memotong </b>Lingkaran Jika</h2>
                        <div className="text-sm pl-4 ">
                            <ul className="list-disc text-xs md:text-sm lg:text-md">
                                <li>Garis <b>berada di luar lingkaran</b></li>
                                <li>Garis <b>tidak menyentuh lingkaran</b></li>
                            </ul>

                        </div>

                    </CardItem>
                </div>
                <div>
                </div>
            </section>

        </>
    )
}
