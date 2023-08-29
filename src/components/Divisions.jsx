import Card from "./Card"
import React from "react";

const Divisions = () => {
    const pathImage = "src/assets/images/"
    const list = [
        {
            id: 1,
            image: `${pathImage}1.png`,
            title: "Embedded System & Iot",
            desc: "Gabungan perangkat keras dan lunak dalam satu perangkat untuk fungsi khusus yang saling terhubung melalui internet untuk berbagi data.",
        },
        {
            id: 2,
            image: `${pathImage}2.png`,
            title: "Web & Mobile Development",
            desc: "Web development Membuat situs web untuk peramban. Mobile development Kembangkan aplikasi untuk perangkat mobile."
        },
        {
            id: 3,
            image: `${pathImage}3.png`,
            title: "Cyber Security",
            desc: "Upaya untuk melindungi sistem komputer, jaringan, dan data dari ancaman serangan siber seperti peretasan, malware, dan pencurian data."
        },
    ];
    const list2 = [
        {
            id: 4,
            image: `${pathImage}4.png`,
            title: "Digital Creative",
            desc: "Digital Creative: Kreativitas menggunakan teknologi digital untuk konten visual dan audio."
        },
        {
            id: 5,
            image: `${pathImage}5.png`,
            title: "Administration",
            desc: "Administration: Manajemen tugas rutin dalam organisasi untuk mencapai tujuan."
        },

    ];

    return (
        <section className="pt-28 pb-32">
            <div className="container mx-auto">
                <div className="text-center lg:-mt-[340px]">
                    <h1 id="divisions" className="font-bold text-[32px] text-dark mb-2" data-aos="zoom-in-down" data-aos-delay="50">Technical Divisions</h1>
                    <div className="flex flex-col lg:flex-row gap-y-8 items-center lg:justify-center lg:gap-x-40">
                        {list.map((item) => (
                            <Card key={item.id}>
                                <Card.Header image={item.image} />      
                                <Card.Body title={item.title} desc={item.desc}/>      
                            </Card> 
                        ))}
                    </div>
                </div>
                <div className="text-center mt-20">
                    <h1 className="font-bold text-[32px] text-dark mb-2" data-aos="zoom-in-down" data-aos-delay="50">Non-Technical Divisions</h1>
                    <div className="flex flex-col lg:flex-row gap-y-8 items-center lg:justify-center lg:gap-x-20">
                        {list2.map((item) => (
                            <Card key={item.id}>
                                <Card.Header image={item.image} />      
                                <Card.Body title={item.title} desc={item.desc} />      
                            </Card> 
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Divisions;