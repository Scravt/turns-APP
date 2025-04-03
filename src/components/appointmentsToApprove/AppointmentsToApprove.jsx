import React, { useState } from 'react';
import AsigProf from '../AsigProf/AsigProf';
import ItemTurn from '../common/ItemTurn';
const AppointmentsToApprove = ({ turnos }) => {
  const turnsPending = turnos?.filter((turno) => turno.professional_id === 1);

  return (
    <div className="pl-12 flex flex-col justify-center ">
      <h2 className="p-4">TURNOS PARA APROBAR</h2>
      <ul className="flex flex-col ">
        {turnsPending.map((turno, index) => (
          <ItemTurn key={index} turno={turno} />
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsToApprove;

