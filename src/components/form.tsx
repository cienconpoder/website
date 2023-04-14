import React from 'react'

export default function form() {
    return (
        <div className=''>
            <form>
                <div className='flex p-4 justify-evenly'>
                    <label>Nombre:</label>
                    <input className='w-[300px] border-solid border-black border-[1px] ml-2'></input>
                </div>
                <div className='flex p-4 pt-0 justify-evenly'>
                    <label className='pr-[15px]'>Email:</label>
                    <input className='w-[300px] border-solid border-black border-[1px] ml-2'></input>
                </div>
                <div className='flex flex-col p-4 pt-0 justify-evenly'>
                    <label>Mensaje:</label>
                    <input className='w-100 h-[200px] border-solid border-black border-[1px] '></input>
                </div>
            </form>
        </div>
    )
}
