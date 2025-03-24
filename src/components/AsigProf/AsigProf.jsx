import React from 'react';
import { getUser } from '../../api/services/user';
import { getProfessionals } from '../../api/services/professional';
import { updateAppointment } from '../../api/services/appointment';

const AsigProf = ({ turno }) => {
  const [user, setUser] = React.useState(null);
  const [professionals, setProfessionals] = React.useState([]);
  
  React.useEffect(() => {
    const fetchData = async () => {
      const dataUser = await getUser(turno.user_id);
      setUser(dataUser);
      console.log(dataUser);

      const dataProf = await getProfessionals();
      setProfessionals(dataProf.professionals); // Guarda los profesionales en el estado
      console.log(dataProf.professionals);
    };
    fetchData();
  }, [turno.user_id]);

  const handleClick = async () => {
    const professional_id = document.getElementById('professional').value;
    const newdata = {
        "user_id": user.id,
        "professional_id": professional_id,
        "date": turno.date,
    }
    
    const newAppointment = await updateAppointment(turno.id, newdata); 

    console.log(newAppointment);
    
  };

  return (
    <div className="h-1/2 w-1/2 absolute m-auto z-10 p-4">
      <h1>Datos del turno</h1>
      <div>
        <div>Tipo de turno: {turno.processType}</div>
        <div>Fecha: {turno.date}</div>
        <div>Hora: {turno.hour}</div>
        <div>Usuario: {user?.name}</div>
        <div>Email: {user?.email}</div>

        <select name="professional" id="professional">
          {professionals.map((prof) => (
            <option key={prof.id} value={prof.id}>
              {prof.name}
            </option>
          ))}
        </select>
        <button onClick={handleClick}>Asignar</button>
      </div>
    </div>
  );
};

export default AsigProf;
