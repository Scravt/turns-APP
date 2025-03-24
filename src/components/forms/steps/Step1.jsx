import React from 'react';
import { useFormikContext } from 'formik';
import InputField from '../../inputField/InputField';

const Step1 = () => {
    const { values, handleChange, handleBlur, errors, touched } = useFormikContext();

    return (
        <div className="flex flex-col  gap-4">
            <InputField text='Nombre' placeholder='Nombre' name='name' value={values.name} handleChange={handleChange} handleBlur={handleBlur} touched={touched.name} errors={errors.name} />
            <InputField text='Apellido' placeholder='Apellido' name='apellido' value={values.apellido} handleChange={handleChange} handleBlur={handleBlur} touched={touched.apellido} errors={errors.apellido} />
            <InputField text='D.N.I' placeholder='D.N.I' name='dni' value={values.dni} handleChange={handleChange} handleBlur={handleBlur} touched={touched.dni} errors={errors.dni} />
            <InputField text='Email' placeholder='Email' name='email' value={values.email} handleChange={handleChange} handleBlur={handleBlur} touched={touched.email} errors={errors.email} />


        </div>
    );
};

export default Step1;
