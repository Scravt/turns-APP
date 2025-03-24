import {conn} from '../axios'

export const getAppointmentConfig = async () => {
    try {
        const response = await conn.get('/appointments-config')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const updateAppointmentConfig = async (data) => {
    try {
        const response = await conn.put('/appointments-config', data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}