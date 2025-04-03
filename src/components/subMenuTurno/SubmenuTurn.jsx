import React from 'react'

const SubmenuTurn = ({setShowTurnos}) => {
 
  return (
    <div className='w-screen  h-10 '>
        <ul className='h-full flex gap-7 pl-8 items-center' >
            <li onClick={()=> setShowTurnos(true)}> Turnos por aprobar</li>
            <li onClick={()=> setShowTurnos(false)}> Turnos aprobados</li>
        </ul>
    </div>
  )
}

export default SubmenuTurn