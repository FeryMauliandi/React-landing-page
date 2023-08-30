import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="pt-12 pb-8 bg-primary" data-aos="fade-up" data-aos-delay="50">
            <div className="container mx-auto">
                <div className="flex flex-wrap lg:justify-between">
                    <div className="mb-6">
                        <h1 className="font-bold text-[36px] text-dark">SeulangaTeam</h1>
                        <h2 className="font-medium text-[18px]">Computer Engineering Community for everyone</h2>
                    </div>
                    <div className="mt-4 mb-12 font-normal text-[16px]">
                        <h2>Universitas Syiah Kuala</h2>
                        <h2>Jalan Teuku Nyak Arief No. 1 23111, Banda Aceh, Aceh, Indonesia</h2>
                        <a href="https://goo.gl/maps/QDJTjvvWnRWFaW4X9">Klik ini untuk lokasi</a>
                    </div>
                </div>
                <div className="w-full border-t-2 border-dark">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex items-center gap-x-10 mt-4 ">
                            <a href="https://instagram.com/seulangateam?igshid=MzRlODBiNWFlZA==" className="text-4xl rounded-full border-2 border-blue-600 p-2 hover:bg-blue-600">
                                <AiOutlineInstagram />
                            </a>
                            <a href="" className="text-4xl rounded-full border-2 border-blue-600 p-2 hover:bg-blue-600">
                                <AiOutlineWhatsApp />
                            </a>
                            <a href="https://www.linkedin.com/company/seulanga-community/" className="text-4xl rounded-full border-2 border-blue-600 p-2 hover:bg-blue-600">
                                <AiOutlineLinkedin />
                            </a>
                        </div>
                    </div>
                    <p className="font-medium text-sm text-dark text-center mt-10">made by <span className="text-blue-600">Feri Mauliandi</span> using Reactjs and tailwindcss</p>
                    <p className="font-medium text-sm text-dark text-center mt-2">Copyright © 2023 SeulangaTeam</p>
                </div>
            </div>
        </footer>
    )   
};

export default Footer;