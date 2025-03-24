import {conn} from '../axios'


export const createAppointment = async (data) => {
    try {
        const response = await conn.post('/appointments', data)
        return response.data
    } catch (error) {
        console.error(error)
    }
    }

export const getAppointment = async (id) => {
    try {
        const response = await conn.get(`/appointment/${id}`)
        return response.data
    } catch (error) {   
        console.error(error)
    }
}

export const getAppointments = async () => {
    try {
        const response = await conn.get('/appointments')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getAppointmentsByUser = async (id) => {
    try {
        const response = await conn.get(`/appointment/user/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getAppointmentsByProfessional = async (id) => {
    try {
        const response = await conn.get(`/appointment/professional/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getAppointmentsByDate = async (date) => {
    try {
        const response = await conn.get(`/appointment/date/${date}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const updateAppointment = async (id, data) => {
    try {
        const response = await conn.put(`/Appointments/${id}`, data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const deleteAppointment = async (id) => {
    try {
        const response = await conn.delete(`/appointment/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}