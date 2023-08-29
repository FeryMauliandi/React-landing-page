import React from 'react';
import Navbar from "./Navbar";
import { CgMenuRight } from 'react-icons/cg'

const Header = ({ setNavMobile }) => {
    return <header data-aos="fade-down" data-aos-delay="50" className="fixed top-0 left-0 z-10 right-0 py-[20px] bg-gradient-to-r from-[#F9FFEF] to-[#8fdf1e] lg:py-[30px]">
        <div className="container mx-auto flex items-center justify-between">
            <a href='#hero' className="text-[22px] text-[#374D0F] lg:text-[32px] font-extrabold">Seulanga<span className="text-[#7FC41C]">Team</span></a>
            <div className='hidden lg:flex font-medium gap-x-[60px]'>
                <Navbar />
            </div>
            <div onClick={() => setNavMobile(true)} className='lg:hidden cursor-pointer'>
                <CgMenuRight className='text-3xl' />
            </div>
        </div>
    </header>
};

export default Header;