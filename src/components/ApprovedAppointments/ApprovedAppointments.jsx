import React from 'react'
import ItemTurn from '../common/ItemTurn'

const ApprovedAppointments = ({turnos}) => {
    const turnsApprove = turnos?.filter((turno) => turno.professional_id !==1)
  return (
    <div className="pl-12 flex flex-col justify-center">
        <h1 className='p-4'> turnos aprobados</h1>
        <ul className="flex flex-col ">
            {turnsApprove?.map((turno, index) => (
                
                  <ItemTurn key={index}  turno={turno} />
            
            ))}

        </ul>

    </div>
  )
}

export default ApprovedAppointments