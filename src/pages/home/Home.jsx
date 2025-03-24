import React from 'react'
import { getAppointmentConfig } from '../../api/services/appointmentConfig'

function Home() {
 const [appointments, setAppointments] = React.useState([])
  React.useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getAppointmentConfig()
      setAppointments(data)
      console.log(data)

    }
    fetchAppointments()
  }, [])
  
  return (
    <div>
     


    </div>
  )
}

export default Home