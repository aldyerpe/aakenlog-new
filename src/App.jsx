import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import aakenLogo from './assets/img/AAKEN_Logo.png';

export default function App() {
  const [toggle, setToggle] = useState(false);
  const menus = [
    {
      id: 1,
      href: '#',
      title: 'Home',
    },
    {
      id: 2,
      href: '#',
      title: 'About Us',
    },
    {
      id: 3,
      href: '#',
      title: 'Why Choose Us ?',
    },
    {
      id: 4,
      href: '#',
      title: 'Our Services',
    },
    {
      id: 5,
      href: '#',
      title: 'Our Vision',
    },
    {
      id: 6,
      href: '#',
      title: 'Our Coverage',
    },
    {
      id: 7,
      href: '#',
      title: 'Contact Us',
    },
  ];
  const services = [
    {
      id: 1,
      icon: 'fa6-solid:plane',
      title: 'AIR FREIGHT',
    },
    {
      id: 2,
      icon: 'fa6-solid:ship',
      title: 'SEA FREIGHT',
    },
    {
      id: 3,
      icon: 'fa6-solid:truck',
      title: 'INLAND TRANSPORT',
    },
    {
      id: 4,
      icon: 'fa6-solid:box',
      title: 'DOMESTIC',
    },
  ];
  return (
    <div className='w-screen max-w-sm mx-auto'>
      {/* Header with Navigation Bar */}
      <div className='bg-[#ff3377] text-white shadow-md fixed z-20 top-0 right-0 left-0 w-full max-w-sm mx-auto flex items-center h-10 p-2'>
        <div className='w-8 h-8 mx-auto'>
          <img
            className='w-8 h-8 cursor-pointer hover:opacity-50'
            src={aakenLogo}
            alt='AAKEN Logo'
          />
        </div>
        <div className='grow text-center text-md text-black font-bold'>
          PT. AAKEN LOGISTICS INDONESIA
        </div>
        <div className='w-8 h-8 mx-auto'>
          <Icon
            onClick={() => setToggle(!toggle)}
            className='w-8 h-8 cursor-pointer hover:opacity-50'
            icon={toggle ? 'mi:close' : 'mi:menu'}
          />
        </div>
      </div>

      {/* Menu Navigation Bar */}
      {toggle ? (
        <div className='bg-[#ff3377] text-white w-full mt-10 max-w-sm fixed z-10 top-0 right-0 left-0 mx-auto flex items-center h-screen max-h-full overflow-hidden transition-[max-height] ease-out duration-500'>
          <div className='bg-[#ff3377] text-white w-full flex flex-col items-center p-2'>
            {menus.map((menu) => (
              <a
                className='block hover:bg-[#3377ff] hover:font-bold w-full p-2 mb-2'
                key={menu.id}
                href={menu.href}
                target='_blank'>
                {menu.title}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className='bg-[#ff3377] text-white w-full mt-10 flex max-w-sm fixed z-10 top-0 right-0 left-0 mx-auto items-center h-screen max-h-0 overflow-hidden transition-[max-height] ease-in-out duration-500'>
          <div className='bg-[#ff3377] text-white w-full flex flex-col items-center p-2'>
            {menus.map((menu) => (
              <a
                className='block hover:bg-[#3377ff] hover:font-bold w-full p-2 mb-2'
                key={menu.id}
                href={menu.href}
                target='_blank'>
                {menu.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero */}
      <div className='bg-[url("./assets/img/patrick-campanale-oCsQLKENz34-unsplash.jpg")] bg-center bg-cover text-white w-full mt-9 h-96 flex flex-col items-center justify-center p-2 gap-y-2'>
        <div className='w-full'>
          <h1 className='text-3xl font-bold text-center w-80 mx-auto'>
            <span className='text-black'>PT.</span>{' '}
            <span className='text-[#ff3377]'>AA</span>
            <span className='text-[#3377ff]'>KEN</span>{' '}
            <span className='text-[#ff3377]'>LOGISTICS</span>{' '}
            <span className='text-[#3377FF]'>INDONESIA</span>
          </h1>
        </div>
        <div className='w-full'>
          <h2 className='text-md font-semibold text-justify w-80 mx-auto'>
            "We served best experience that maybe still not met with your
            previous Freight Forwarding."
          </h2>
        </div>
        <div className='w-full flex flex-col gap-y-1'>
          <p className='text-center'>Tracking Your Shipment :</p>
          <div className='w-full flex items-center gap-x-2'>
            <input className='p-2 text-[#3377ff] grow' />
            <button className='p-2 bg-white text-[#3377ff] w-20 hover:bg-[#3377ff] hover:text-white hover:font-bold'>
              Track
            </button>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className='bg-[url("./assets/img/john-carter-MCQIYzTqx8M-unsplash.jpg")] bg-center bg-cover text-white w-full h-192 flex flex-col items-center justify-center p-2 gap-y-4'>
        <div className='w-full'>
          <h1 className='text-3xl font-bold text-center w-80 mx-auto'>
            <span className='text-white'>Our</span>{' '}
            <span className='text-[#3377ff]'>Services</span>
          </h1>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-y-2'>
          {services.map((service) => (
            <div
              key={service.id}
              className='w-80 min-h-[10rem] mx-auto bg-transparent border-2 border-black drop-shadow-lg text-black rounded-md p-2 flex flex-col items-center justify-center gap-y-2 hover:bg-black hover:text-white cursor-pointer'>
              <Icon className='w-10 h-10' icon={service.icon} />
              <h2 className='text-2xl font-semibold text-center w-32 mx-auto'>
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
