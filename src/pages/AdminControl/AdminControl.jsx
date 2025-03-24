import { useEffect, useState } from "react"
import { getAppointments } from "../../api/services/appointment"
import AppointmentsToApprove from "../../components/appointmentsToApprove/AppointmentsToApprove";
import ApprovedAppointments from "../../components/ApprovedAppointments/ApprovedAppointments";

const AdminControl = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getAppointments()
      await setTurnos(data)
      console.log(turnos.appointments)

    }
    fetchAppointments()
  
    
  }, []);


//   }
      //  <ApprovedAppointments turnos={turnos} />



  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-5">AdminControl</h1>
      <div className="flex gap-7">
        {turnos.appointments?.length > 0 ? <AppointmentsToApprove turnos={turnos.appointments} /> : <p>Cargando...</p>}

        {turnos.appointments?.length > 0 ? <ApprovedAppointments turnos={turnos.appointments} /> : <p>Cargando...</p>}
      


      </div>
    </div>
  )
}

export default AdminControl