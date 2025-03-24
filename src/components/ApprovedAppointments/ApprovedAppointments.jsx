import React from 'react'

const ApprovedAppointments = ({turnos}) => {
    const turnsApprove = turnos?.filter((turno) => turno.professional_id !==1)
  return (
    <div>
        <h1 className='p-4'> turnos aprobados</h1>
        <ul>
            {turnsApprove?.map((turno) => (
                <li key={turno.id} className='flex  gap-2'>
                    <span> {turno.processType}</span>
                    <span>{turno.date}</span>
                    
                    
                </li>
            ))}

        </ul>

    </div>
  )
}

export default ApprovedAppointments