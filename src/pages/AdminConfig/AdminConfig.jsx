import { useEffect, useState } from 'react'
import { getAppointmentConfig, updateAppointmentConfig } from '../../api/services/appointmentConfig'

const AdminConfig = () => {
    const [config, setConfig] = useState(null)

    useEffect(() => {
        const fetchAppointmentConfig = async () => {
            const data = await getAppointmentConfig()
            setConfig(data)
         
        }
        fetchAppointmentConfig()
    }, [])

    const handleSubmit = async (e) => {
        Console.log(e)
        e.preventDefault()

        const minWaintingDays = e.target.minWaintingDays.value

        // Obtener los días seleccionados
        const daysOfWeek = Array.from(e.target.daysOfWeek)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value)

        const data = {
            minWaintingDays,
            daysOfWeek,
        }

        const response = await updateAppointmentConfig(data)
        console.log(response)
    }

    if (!config) {
        return <div>Cargando configuración...</div>
    }

    return (
        <div>
            <h1>Configuración de turnos</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="minWaintingDays">
                        Días previos a seleccionar turno, valor actual {config.minWaintingDays}
                    </label>
                    <input
                        type="number"
                        name="minWaintingDays"
                        id="minWaintingDays"
                        className="h-6 p-4 bg-amber-500"
                        defaultValue={config.minWaintingDays}
                    />
                </div>
                <div>
                    <label>Días en los que se pueden sacar turno</label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="daysOfWeek"
                                value="1"
                              
                            />{' '}
                            Lunes
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="daysOfWeek"
                                value="2"
                               
                            />{' '}
                            Martes
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="daysOfWeek"
                                value="3"
                                
                            />{' '}
                            Miércoles
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="daysOfWeek"
                                value="4"
                               
                            />{' '}
                            Jueves
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="daysOfWeek"
                                value="5"
                            
                            />{' '}
                            Viernes
                        </label>
                    </div>
                </div>
                <button type="submit">Enviar configuración</button>
            </form>
        </div>
    )
}

export default AdminConfig
