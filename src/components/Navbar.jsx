import React from 'react';

import { navData } from '../data';

const Navbar = () => {
    return <nav className='flex items-center'>
    <ul className='flex gap-x-[80px]'>
      {navData.map((item, index) => {
        return <li className='border-b-2 border-transparent hover:border-black transition-all duration-200' key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      })}
    </ul>
  </nav>;
}

export default Navbar