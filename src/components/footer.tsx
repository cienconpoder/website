import React from 'react'
import Twitter from '../public/images/icons/twitter.png'
import Instagram from '../public/images/icons/instagram.png'
import Web from '../public/images/icons/www.png'
import Poder from '../public/images/poder&poder.svg'
import Image from "next/image";

export default function footer() {
    return (
        <div className='m-[15px] flex flex-col'>
            <hr className='text-[#63d5f9] h-[2px] bg-[#63d5f9]'/>
            <div className='w-[120px] flex mt-2 mb-1 justify-evenly m-auto'>
            <a href='https://twitter.com/augustoreyes' target='_blank'> 
            <Image src={Twitter} width={28} height={28} />
            </a>
            <a href='https://www.instagram.com/augustoreyes/' target='_blank'> 
            <Image src={Instagram} width={28} height={28}/>
            </a>
            <a href='http://www.poderypoder.com.co/' target='_blank'>
            <Image src={Web} width={28} height={28} />
            </a>
            </div>
            <Image src={Poder} width={30} height={40} />
            <div className='text-center text-[8px] font-light'>
            <p>Todos los derechos reservados.</p>
            <span>- 2023 -</span>
            </div>
        </div>
    )
}
