import { useEffect, useState } from "react"
import { getAppointments } from "../../api/services/appointment"
import AppointmentsToApprove from "../../components/appointmentsToApprove/AppointmentsToApprove";
import ApprovedAppointments from "../../components/ApprovedAppointments/ApprovedAppointments";

import SubmenuTurn from "../../components/subMenuTurno/SubmenuTurn";


const AdminControl = () => {
  const [turnos, setTurnos] = useState([]);
  const[showTurnos, setShowTurnos] = useState(true)

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getAppointments();
      setTurnos(data.appointments || []); // Asegurar que sea un array
    };

    fetchAppointments();
  }, [showTurnos]);


  return (
    <div className="flex flex-col w-screen h-screen justify-center pt-24">
      <h1 className="pb-5 pl-4 text-4xl font-bold">Turnos</h1>
      <div className="w-full flex flex-col grow gap-7 ">
        <SubmenuTurn setShowTurnos={setShowTurnos}/>
        {showTurnos ? (
          <AppointmentsToApprove turnos={turnos} />
        ) : (
          <ApprovedAppointments turnos={turnos} />
        )}



      </div>
    </div>
  );
};

export default AdminControl;