import React from 'react'

const EditAppoinmentes = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center pl-3 border-2 border-amber-400'>
            <h1 className='text-4xl pb-3 font-bold text-start'>Editar turnos</h1>
            <section className='h-3/5 w-3/4 flex flex-col gap-4 p-5 border border-gray-200 rounded-2xl'>
                <h2 className='text-3xl font-bold mb-4'>
                    Informacion de Turno
                </h2>
                <ul className='flex flex-col gap-4 '>
                    <li className='flex items-center gap-2'>
                        <img src="/public/images/user.svg" alt="" />
                        nombre
                    </li>
                    <li className='flex items-center gap-2'>
                        <img src="/public/images/home.png" alt="" />
                        Secretaria trabajo
                    </li>
                    <li className='flex items-center gap-2'>
                        <img src="/public/images/Bookmark.png" alt="" />
                        Tipo tramite
                    </li>
                    <li className='flex items-center gap-2'>
                        <img src="/public/images/CalendarBlank.svg" alt="" />
                        fecha
                    </li>
                </ul>
                <div className='flex flex-grow gap-2'>
                    <div className='flex  flex-grow pl-2 gap-2'>
                        <p className='h-9 leading-9'>Asignar profesional</p>
                        <select name="professional" id="professional" className='h-9'>
                            <option value="1">Profesional 1</option>
                            <option value="2">Profesional 2</option>
                            <option value="3">Profesional 3</option>
                        </select>
                    </div>

                </div>




                {/* Sección de botones al final */}
                <div className='flex justify-end gap-6 mt-5'>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">Cancelar</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Guardar</button>
                </div>

            </section>
        </div>
    )
}

export default EditAppoinmentes
