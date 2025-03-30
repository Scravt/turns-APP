import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import { createUser } from '../../api/services/user';
import { createAppointment } from '../../api/services/appointment';
import ButtonMain from '../common/ButtonMain';


const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    // Valores iniciales
    const initialValues = {
        name: '',
        apellido: '',
        dni: '',
        email: '',
        processType: '',
        date: ''
    };


    const validationSchema = [
        Yup.object({
            name: Yup.string().required('Campo requerido'),
            apellido: Yup.string().required('Campo requerido'),
            dni: Yup.string().required('Campo requerido'),
            email: Yup.string().email('Email inválido').required('Campo requerido')
        }),
        Yup.object({
            processType: Yup.string().required('Selecciona un tipo de trámite')
        }),
        Yup.object({
            date: Yup.string().required('Campo requerido')
        })
    ];


    const nextStep = async (validateForm, errors, setTouched) => {
        const validationErrors = await validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setStep((prev) => prev + 1);
        } else {
            setTouched(validationErrors);
        }
    };

    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = async (values) => {
        console.log('Formulario enviado con valores:', values);
        const user = {
            name: values.name,
            lastName: values.apellido,
            dni: values.dni,
            email: values.email,
        };

        try {
            const newUser = await createUser(user); // Espera la respuesta
            console.log('Respuesta del servidor:', newUser);

            const appointment = {
                user_id: newUser.id, // Id del usuario creado
                professional_id: 1, // id admin por defecto.... se reasigna al profesional que atienda
                processType: values.processType,
                date: values.date
            };

            // Ahora podemos crear la cita usando newUser.id
            const newAppointment = await createAppointment(appointment);
            console.log('Respuesta del servidor:', newAppointment);

            navigate('/final-message');
        } catch (error) {
            console.error('Error al crear usuario o cita:', error);
        }
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema[step - 1]}
            onSubmit={handleSubmit}
        >
            {({ values, validateForm, errors, setTouched }) => (
                <div className='w-1/2 flex flex-col items-center justify-center h-screen'>

                    <h1 className='text-3xl font-bold text-center mb-6'>
                        Sacar Turno
                    </h1>


                    <Form className="w-1/2 min-h-[450px] flex flex-col justify-between gap-6 p-10">
                        {step === 1 && <Step1 />}
                        {step === 2 && <Step2 />}
                        {step === 3 && <Step3 />}

                        {/* Contenedor de botones */}
                        <div className={`flex ${step === 1 ? 'justify-end' : 'justify-between'}`}>
                            {step > 1 && (
                                <button
                                    type="button"
                                    className="bg-green-600 w-1/3 rounded-lg text-white text-xs py-2 font-medium mb-3"
                                    onClick={prevStep}
                                >
                                    Atrás
                                </button>
                            )}

                            {step < 3 ? (
                                <button
                                    className="bg-green-600 w-1/3 rounded-lg text-white text-xs py-2 font-medium mb-3"
                                    type="button"
                                    onClick={() => nextStep(validateForm, errors, setTouched)}
                                >
                                    Siguiente
                                </button>
                            ) : (
                                <button
                                    className="bg-green-600 w-1/3 rounded-lg text-white text-xs py-2 font-medium mb-3"
                                    type="submit"
                                >
                                    Enviar
                                </button>
                            )}
                        </div>
                    </Form>

                </div>
            )}
        </Formik>
    );
};

export default MultiStepForm;
