import React from 'react';
import logo from '../../images/logo.png';
import Image from 'next/image';
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import cartIcon from '../../images/cartIcon.png';
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
                <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-9 px-0 md:px-4'>
                    {/* logo */}
                    <Link href={'/'} className='md:px-6 px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-between h-[70%]'>
                        <Image className='w-28 object-cover mt-2' src={logo} alt='logoImg' />
                    </Link>
                    {/* delivery */}
                    <div className='px-2 border border-transparent hover:border-white cursor-pointer duration-300  items-center justify-between h-[70%] hidden xl:inline-flex gap-1'>
                        <SlLocationPin />
                        <div className='text-xs'>
                            <p>Deliver to</p>
                            <p className='font-bold'>USA</p>
                        </div>
                    </div>
                    {/* searchbar */}
                    <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
                        <input className='w-full h-full rounded-md px-2 placeholder:text-sm text-black text-base outline-none border-[3px] border-transparent focus-visible:border-amazon_yellow' type="text" placeholder='search' />
                        <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'>
                            <HiOutlineSearch />
                        </span>
                    </div>
                    {/* signin */}
                    <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
                        <p>Hello, sign in</p>
                        <p className="text-white font-bold flex items-center">Account, Lists <span><BiCaretDown /></span></p>
                    </div>
                    {/* favourite */}
                    <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                        <p>Merked</p>
                        <p className="text-white font-bold">& Marked</p>
                    </div>
                    {/* cart */}
                    <Link href={'/cart'} className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                        <Image className='w-auto object-cover h-8' src={cartIcon} alt='cartIcon' />
                        <p className="text-xs text-white font-bold mt-3">Cart</p>
                        <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
                            0
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Header;