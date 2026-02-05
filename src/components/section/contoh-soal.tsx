import SectionTitle from "../ui/section/section-title"
import Card from "../ui/card/card"

export default function ContohSoalSection() {
    return (
        <>
            <section className="flex flex-col gap-4">
                <SectionTitle title="Contoh Soal"></SectionTitle>
                <div className="text-xs md:text-sm lg:text-md px-2 md:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <Card>
                            <div className="flex flex-col gap-4">
                                <b>Soal 1: </b>
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
                                    D = 2<sup>2</sup> – 4(10)(-5)
                                    <br />                               <br />
                                    D = 4 + 200
                                    <br />                               <br />
                                    D = 204
                                    <br />                               <br />
                                    Karena nilai diskriminannya adalah 204, dan 204 {'>'} 0, maka garis y = 3x – 1 memotong lingkaran x<sup>2</sup> + y<sup>2</sup> + 2x + 2y – 4 = 0 di dua titik.</p>
                            </div>

                        </Card>
                        <Card>
                            <div className="flex flex-col gap-4">
                                <b>Soal 2: </b>
                                <h2>
                                    Tentukan posisi garis y = 2x + 3 terhadap lingkaran
                                    x<sup>2</sup> + y<sup>2</sup> – 4x – 6y + 9 = 0!
                                </h2>

                                <b>Pembahasan: </b>
                                <p>
                                    Pertama, kita cari persamaan kuadrat dengan mensubstitusikan terlebih dahulu
                                    persamaan garis y = 2x + 3 ke dalam persamaan lingkaran
                                    x<sup>2</sup> + y<sup>2</sup> – 4x – 6y + 9 = 0, sehingga:
                                    <br /><br />

                                    x<sup>2</sup> + (2x + 3)<sup>2</sup> – 4x – 6(2x + 3) + 9 = 0
                                    <br /><br />

                                    x<sup>2</sup> + (4x<sup>2</sup> + 12x + 9) – 4x – 12x – 18 + 9 = 0
                                    <br /><br />

                                    5x<sup>2</sup> – 4x + 0 = 0
                                    <br /><br />

                                    Setelah kita peroleh persamaan kuadratnya, kita cari nilai diskriminannya
                                    sebagai berikut:
                                    <br /><br />

                                    5x<sup>2</sup> – 4x + 0 = 0, maka a = 5, b = –4, c = 0.
                                    <br /><br />

                                    D = b<sup>2</sup> – 4ac
                                    <br /><br />

                                    D = (–4)<sup>2</sup> – 4(5)(0)
                                    <br /><br />

                                    D = 16 – 0
                                    <br /><br />

                                    D = 16
                                    <br /><br />

                                    Karena nilai diskriminannya adalah 16, dan 16 {'>'} 0, maka garis
                                    y = 2x + 3 memotong lingkaran
                                    x<sup>2</sup> + y<sup>2</sup> – 4x – 6y + 9 = 0 di dua titik.
                                </p>
                            </div>

                        </Card>
                    </div>
                </div>
            </section >
        </>
    )
}
