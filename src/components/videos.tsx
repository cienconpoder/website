import React from 'react'
import ReactPlayer from 'react-player'
import { SourceProps } from 'react-player/base'
import Image from "next/image";


export default function Videos(props: { urlvideo1: string , urlvideo2: string , title1: string, title2: string, thumbnail1: string, thumbnail2: string}) {
    return (
        <div>
            <div className='w-100 flex justify-center flex-wrap'>
            <div className='flex flex-col items-center'>
            <div className='mt-[10px]'>
            <Image src={props.title1} width={320} height={100} objectFit='cover'/>
            </div>  
            <div className=''>
            <ReactPlayer 
            light = { < Image  src = {props.thumbnail1} /> }
            url={props.urlvideo1}
                    width='250px'
                    height='480px'
                    controls
                    config={{ file: { 
                        attributes: {
                          controlsList: 'nodownload'
                        }
                      }}}
            />
            </div>
            </div>
            <div className='flex flex-col items-center'>
            <div className='mt-[10px]'>
            <Image src={props.title2} width={320} height={100} objectFit='cover'/>
            </div>
            <div className=''>
            <ReactPlayer 
            url={props.urlvideo2}
            light = { < Image  src = {props.thumbnail2}  /> }
                    width='250px'
                    height='480px'
                    controls
                    config={{ file: { 
                        attributes: {
                          controlsList: 'nodownload'
                        }
                      }}}
             /> 
            </div> 
            </div>
        </div>
        </div>
       
    )
}