import SectionTitle from "../ui/section/section-title"
import OrderedList from "../ui/list/ordered-list"
import UnorderedList from "../ui/list/unordered-list"

export default function LangkahLangkahMenentukanKedudukanGarisSection() {
    return (
        <>
            <section className="flex flex-col gap-4">
                <SectionTitle title="Langkah-Langkah Menentukan Kedudukan Garis"></SectionTitle>
                <div className="text-md px-4">
                    <OrderedList title="Untuk menentukan kedudukan garis terhadap lingkaran langkah-langkahnya sebagai berikut:">
                        <li>Substitusi 𝑦 dari persamaan garis y = mx + n ke persamaan lingkaran L.</li>
                        <li>Susun persamaan kuadrat sekutu dalam variabel 𝑥 (bentuk ax + bx + c = 0).</li>
                        <li>Hitung nilai diskriminan persamaan kuadrat sekutu dengan rumus D = b^2−4ac.</li>
                        <li>Periksa tanda diskriminan 𝐷 dengan kriteria:</li>
                        <div className="pl-6">
                            <UnorderedList>
                                <li>Jika D {'>'} 0 maka garis memotong lingkaran pada dua titik.</li>
                                <li>Jika D = 0 maka garis menyinggung lingkaran (ada satu titik potong)</li>
                                <li>Jika D {'<'} 0 maka garis tidak memiliki titik potong dengan lingkaran.</li>
                            </UnorderedList>
                        </div>

                    </OrderedList>
                </div>
            </section >

        </>
    )

}
