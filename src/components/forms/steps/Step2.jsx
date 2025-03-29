import React from 'react';
import { useFormikContext } from 'formik';

const Step2 = () => {
    const { values, handleChange, errors, touched } = useFormikContext();

    return (
        <div className="flex flex-col gap-6">
            <label className="text-4xl mb-3 font-semibold">
                Tipo de trámite
            </label>
            <div className='flex flex-col gap-12 pl-4'>
                <label className='flex items-center gap-2 text-2xl'>
                    <input 
                    type="radio" name="processType" value="Audiencia" onChange={handleChange} checked={values.processType === 'Audiencia'} />
                    Audiencia
                </label>
                <label className='flex items-center gap-2 text-2xl'>
                    <input type="radio" name="processType" value="Conciliacion" onChange={handleChange} checked={values.processType === 'Conciliacion'} />
                    Conciliación
                </label>
                <label className='flex items-center gap-2 text-2xl'>
                    <input type="radio" name="processType" value="Documentacion" onChange={handleChange} checked={values.processType === 'Documentacion'} />
                    Documentación
                </label>
            </div>

            {touched.processType && errors.processType ? <div>{errors.processType}</div> : null}
        </div>
    );
};

export default Step2;
