import Card from "./Card"
import React from "react"
import { BiChip } from "react-icons/Bi"
import { MdSecurity } from "react-icons/Md"
import { CgWebsite } from "react-icons/cg"
import { GrUserAdmin } from "react-icons/gr"
import { LiaDigitalTachographSolid } from "react-icons/lia"

const Divisions = () => {
    const list = [
        {
            id: 1,
            icons: <BiChip/>,
            title: "Embedded System & Iot",
            desc: "Gabungan perangkat keras dan lunak dalam satu perangkat untuk fungsi khusus yang saling terhubung melalui internet untuk berbagi data.",
        },
        {
            id: 2,
            icons: <CgWebsite />,
            title: "Web & Mobile Development",
            desc: "Web development Membuat situs web untuk peramban. Mobile development Kembangkan aplikasi untuk perangkat mobile."
        },
        {
            id: 3,
            icons: <MdSecurity />,
            title: "Cyber Security",
            desc: "Upaya untuk melindungi sistem komputer, jaringan, dan data dari ancaman serangan siber seperti peretasan, malware, dan pencurian data."
        },
    ];
    const list2 = [
        {
            id: 4,
            icons: <LiaDigitalTachographSolid />,
            title: "Digital Creative",
            desc: "menciptakan karya kreatif menggunakan teknologi digital, seperti desain grafis, animasi, video, dan seni digital, dengan menggabungkan elemen kreatif dan alat-alat digital."
        },
        {
            id: 5,
            icons: <GrUserAdmin />,
            title: "Administration",
            desc: "pengelolaan, pengawasan, dan organisasi berbagai aktivitas serta sumber daya dalam suatu sistem atau organisasi guna mencapai tujuan dengan efisien dan efektif."
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
                                <Card.Header icons={item.icons} />      
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
                                <Card.Header icons={item.icons} />      
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