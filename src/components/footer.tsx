import React from 'react'
import Twitter from '../public/images/icons/Redes-01.svg'
import Instagram from '../public/images/icons/Redes-02.svg'
import Web from '../public/images/icons/Redes-03.svg'
import Poder from '../public/images/poder&poder.svg'
import Image from "next/image";

export default function footer() {
    return (
        <div className='m-[15px] flex flex-col'>
            <hr className='text-[#63d5f9] h-[2px] bg-[#63d5f9]'/>
            <div className='w-[180px] flex mt-2  justify-evenly m-auto'>
            <a href='https://twitter.com/augustoreyes' target='_blank'> 
            <Image src={Twitter} width={150} height={150} objectFit='cover'/>
            </a>
            <a href='https://www.instagram.com/augustoreyes/' target='_blank'> 
            <Image src={Instagram} width={150} height={150} objectFit='cover'/>
            </a>
            <a href='http://www.poderypoder.com.co/' target='_blank'>
            <Image src={Web} width={150} height={150} objectFit='cover'/>
            </a>
            </div>
            <Image src={Poder} width={45} height={45} />
            <div className='text-center text-[8px] font-light'>
            <p>Todos los derechos reservados.</p>
            <span>- 2023 -</span>
            </div>
        </div>
    )
}
