import React from 'react'
import ReactPlayer from 'react-player'


export default function Videos() {
    return (
        <div>
             <div className='w-100 flex justify-center flex-wrap'>
            <div className='m-5'>
            <ReactPlayer 
            url='https://cienconpoder.s3.us-east-2.amazonaws.com/2748D814-Fe0e-440C-B3ab-116F72c42329.mp4'
                    width='250px'
                    height='550px'
                    controls
                    config={{ file: { 
                        attributes: {
                          controlsList: 'nodownload'
                        }
                      }}}
            />
            </div>
            <div className='m-5'>
            <ReactPlayer 
            url='https://cienconpoder.s3.us-east-2.amazonaws.com/8379E4c0-F777-404F-A229-E24070fd38e3-002.mp4'
                    width='250px'
                    height='550px'
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
       
    )
}