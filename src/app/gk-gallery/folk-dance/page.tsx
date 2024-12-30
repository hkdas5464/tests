'use client'

import { useState } from "react";
import Card from "./Components/Card";
import './page.css'

function App() {
    const [openIndex, setOpenIndex] = useState(1);

    return (
        <div className="p-8 grid auto-rows-min w-full gap-5 max-w-3xl mx-auto min-h-screen">
            <h1 className="text-blue-700 text-6xl p-8 text-center">Folk Dances of INDIA</h1>

            <Card
                title="Andhra Pradesh"
                color="bg-[#25d0ab]"
                subtitle="Kuchipudi ,Vilasini Natyam ,Bhamakalpam ,Veeranatyam ,Dappu ,Tappeta Gullu ,Lambadi ,Dhimsa ,Kolattam ,Butta Bommalu"
                onClick={() => {
                    setOpenIndex(1);
                }}
                open={openIndex === 1}
            />

            <Card
                title="Arunachal Pradesh"
                subtitle="Buiya ,Chalo ,Wancho ,Pasi Kongki ,Ponung ,Popir ,Bardo Chham"
                color="bg-[#ff7054]"
                onClick={() => {
                    setOpenIndex(2);
                }}
                open={openIndex === 2}
            />

            <Card
                title="Assam"
                color="bg-[#00c2d7]"
                subtitle="Bihu ,Bichhua ,Natpuja, Maharas ,Kaligopal, Bagurumba ,Naga dance ,Khel Gopal ,Tabal Chongli, Canoe ,Jhumura Hobjanai"
                onClick={() => {
                    setOpenIndex(3);
                }}
                open={openIndex === 3}
            />

            <Card
                title="Bihar"
                color="bg-[#00c2d7]"
                subtitle="Jata-Jatin ,Bakho-Bakhain ,Panwariya ,Sama Chakwa ,Bidesia,Dhobia,Jhijhia,Jharni,Palka,Kajri"
                onClick={() => {
                    setOpenIndex(4);
                }}
                open={openIndex === 4}
            />
        </div>
    );
}

export default App;