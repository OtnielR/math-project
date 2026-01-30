import SectionTitle from "../ui/section/section-title"
import Card from "../ui/card/card"

export default function ContohSoalSection() {
    return (
        <>
            <section className="flex flex-col gap-4">
                <SectionTitle title="Contoh Soal"></SectionTitle>
                <div className="text-sm md:text-md px-2 md:px-4">
                    <Card>
                        <div className="flex flex-col gap-4">
                            <b>Soal: </b>
                            <h2>Tentukan posisi garis y = 3x – 1 terhadap lingkaran x<sup>2</sup> + y<sup>2</sup> + 2x + 2y – 4 = 0!</h2>
                            <b>Pembahasan: </b>
                            <p>
                                Pertama, kita cari persamaan kuadrat dengan mensubstitusikan terlebih dahulu persamaan garis y = 3x – 1 ke dalam persamaan lingkaran x<sup>2</sup> + y<sup>2</sup> + 2x + 2y – 4 = 0, sehingga:
                                <br />                               <br />
                                x<sup>2</sup> + (3x – 1)<sup>2</sup> + 2x + 2(3x – 1) – 4 = 0
                                <br />                               <br />
                                x<sup>2</sup> + 9x<sup>2</sup> – 6x + 1 + 2x + 6x – 2 – 4 = 0
                                <br />                               <br />
                                10x<sup>2</sup> + 2x – 5 = 0
                                <br />                               <br />
                                Setelah kita peroleh persamaan kuadratnya, kita cari nilai diskriminannya sebagai berikut:
                                <br />                               <br />
                                10x<sup>2</sup> + 2x – 5 = 0, a = 10, b = 2, c = -5.
                                <br />                               <br />
                                D = b<sup>2</sup> – 4ac
                                <br />                               <br />
                                D = 22 – 4(10)(-5)
                                <br />                               <br />
                                D = 22 + 200
                                <br />                               <br />
                                D = 222
                                <br />                               <br />
                                Karena nilai diskriminannya adalah 222, dan 222 {'>'} 0, maka garis y = 3x – 1 memotong lingkaran x<sup>2</sup> + y<sup>2</sup> + 2x + 2y – 4 = 0 di dua titik.</p>
                        </div>
                    </Card>

                </div>
            </section >

        </>
    )

}
