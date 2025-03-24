import {conn} from "../axios";

export const getUser = async (id) => {
    try {
        const { data } = await conn.get(`/usuarios/${id}`);
        return data;
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        return null;
    }
};

export const createUser = async (user) => {
    try {
        const { data } = await conn.post('/usuarios', user);
        return data;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        return null;
    }
};