import {conn} from '../axios';

export const getProfessional = async (id) => {
    try {
        const response = await conn.get(`/professionals/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener profesional:', error);
        return null;
    }
};

export const getProfessionals = async () => {
    try {
        const response = await conn.get('/professionals');
        return response.data;
    } catch (error) {
        console.error('Error al obtener profesionales:', error);
        return null;
    }
}