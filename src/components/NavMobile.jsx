import React, { useEffect, useState } from 'react';

import { navData } from "../data";

import { CgClose } from 'react-icons/cg';

const NavMobile = ({setNavMobile}) => {
  return <nav className='lg:hidden bg-primary h-full w-80 bottom-0 top-0 flex justify-center items-center'>
    <div className='absolute top-2 left-2 cursor-pointer'>
      <CgClose onClick={()=> setNavMobile(false)} className='text-3xl'/>
    </div>
    <ul onClick={()=> setNavMobile(false)} className='text-xl flex flex-col gap-y-8'>
      {navData.map((item,index)=> {
        return <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      })}
    </ul>
  </nav>
}

export default NavMobile;