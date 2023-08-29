import React from "react";
import Image from "../assets/logo.png";

const Hero = () => {
    return (
        <section id="hero" className="bg-gradient-to-l from-[#ffffff] to-[#d3f885] pb-[80px] lg:pb-[180px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center lg:flex-row">
                    <div data-aos="fade-right" data-aos-delay="50" className="flex-1">
                        <h2 className="text-[20px] lg:text-[24px] text-primary font-semibold mt-[150px] lg:mt-[150px] lg:mb-2">Halo, selamat datang</h2>
                        <h1 className="text-[28px] lg:text-[36px] max-w-[520px] font-extrabold mb-4 lg:mb-4">Tempat di mana para individu berkumpul untuk belajar dan berkompetisi bersama.</h1>
                        <h4 className="text-[16px] lg:text-[20px] max-w-[500px] font-medium mb-4 lg:mb-4">Mari bergabung dan menjadi bagian dari perjalanan luar biasa kami menuju keunggulan</h4>
                        <button className="font-medium text-[20px] bg-primary py-[5px] px-[55px] rounded-xl hover:bg-dark hover:text-primary">Daftar</button>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="50" className="flex-1 lg:-mr-[300px] lg:mt-[150px]">
                        <img className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]" src={Image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;