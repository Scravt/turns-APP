import {conn} from '../axios'

export const getAppointmentConfig = async () => {
    try {
        const response = await conn.get('/appointments-config')
        return response.data
    } catch (error) {
        console.error(error)
    }
}