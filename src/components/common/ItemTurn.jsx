import React from 'react'

const ItemTurn= ({turno}) => {
        return (
            <div className='my-2  flex h-14 border border-gray-200 rounded-2xl'>
                <div className='w-[10%] flex gap-2 items-center justify-center border border-transparent  border-r-gray-200 '>
                    <p className='text-2l'> Mes</p>
                    <p className='font-bold text-2xl'>12</p>
                </div>
                <div className='w-1/5 flex gap-2 items-center justify-self-start grow border border-transparent  border-r-gray-200  pl-5 '>
                    {turno?.user_id}
                </div>
                <div className='w-1/5 flex gap-2 items-center justify-center border border-transparent  border-r-gray-200'>
                    {turno?.date}
                </div>
                <div className=' w-1/5 flex gap-2 items-center justify-center border border-transparent  border-r-gray-200'>
                    {turno?.processType}
                </div>
                <div className='w-[10%] flex gap-2 items-center justify-center '>
                    <button className=' bg-green-700 text-white rounded-lg text-xs p-2 font-medium '>
                        edith
                    </button>
                </div>
            </div>
        )
    }

export default ItemTurn
