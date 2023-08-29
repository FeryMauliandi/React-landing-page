import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLinkedin } from "react-icons/ai";

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-r from-[#ffffff] to-dark pt-32 pb-32 lg:pb-[340px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-start lg:flex-row">
                    <div className="flex flex-wrap lg:w-[140%]">
                        <h1 className="font-bold text-[34px] text-dark mb-2" data-aos="fade-down" data-aos-delay="50">About Us</h1>
                        <p className="font-medium text-[18px] lg:text-[22px]" data-aos="fade-right" data-aos-delay="50">Seulanga merupakan sebuah komunitas mahasiswa yang menerapkan proses pembelajaran Project Based Learning (PBL) untuk membentuk dan menempa mahasiswa atau mahasiswi sehingga mampu menjawab tantangan publik. </p>
                    </div>
                    <div className="flex flex-wrap mt-6" data-aos="fade-left" data-aos-delay="50">
                        <h4 className="font-medium text-[22px] lg:text-[26px] text-secondary">Tujuan:</h4>
                        <p className="font-medium text-[18px] lg:text-[22px]">Para anggota dapat menjawab tantangan publik dan dapat menjadi delegasi untuk ikut serta dalam kompetisi-kompetisi  bergengsi, nasional maupun internasional</p>
                        <div className="flex items-center gap-x-10 mt-5 ">
                            <a href="https://instagram.com/seulangateam?igshid=MzRlODBiNWFlZA==" className="text-4xl rounded-full border-2 border-primary p-2 hover:bg-primary">
                                <AiOutlineInstagram />
                            </a>
                            <a href="" className="text-4xl rounded-full border-2 border-primary p-2 hover:bg-primary">
                                <AiOutlineWhatsApp />
                            </a>
                            <a href="https://www.linkedin.com/company/seulanga-community/" className="text-4xl rounded-full border-2 border-primary p-2 hover:bg-primary">
                                <AiOutlineLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;