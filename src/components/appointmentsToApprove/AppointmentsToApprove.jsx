import React, { useState } from 'react';
import AsigProf from '../AsigProf/AsigProf';    

const AppointmentsToApprove = ({ turnos }) => {
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null); // Estado para manejar el turno seleccionado

  const turnsPendig = turnos?.filter((turno) => turno.professional_id === 1);
  console.log(turnos);

  const handleAsignarClick = (turno) => {
    setTurnoSeleccionado(turno); // Establece el turno seleccionado
  };

  return (
    <div>
      <h1 className="p-4">Turnos para aprobar</h1>
      <ul className="flex flex-col gap-2">
        {turnsPendig.map((turno) => (
          <li key={turno.id} className="flex gap-2">
            <p>{turno.user_id}</p>
            <p>{turno.professional_id}</p>
            <p>{turno.processType}</p>
            <p>{turno.date}</p>
            <button onClick={() => handleAsignarClick(turno)}>Asignar profesional</button>
          </li>
        ))}
      </ul>

      {/* Si hay un turno seleccionado, muestra el componente AsigProf */}
      {turnoSeleccionado && <AsigProf turno={turnoSeleccionado} />}
    </div>
  );
};

export default AppointmentsToApprove;
