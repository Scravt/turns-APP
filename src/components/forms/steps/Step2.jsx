import React from 'react';
import { useFormikContext } from 'formik';

const Step2 = () => {
    const { values, handleChange, errors, touched } = useFormikContext();

    return (
        <div className="flex flex-col gap-4">
            <label>Tipo de trámite</label>
            <div className='flex flex-col gap-4 pl-4'>
                <label>
                    <input type="radio" name="processType" value="Audiencia" onChange={handleChange} checked={values.processType === 'Audiencia'} />
                    Audiencia
                </label>
                <label>
                    <input type="radio" name="processType" value="Conciliacion" onChange={handleChange} checked={values.processType === 'Conciliacion'} />
                    Conciliación
                </label>
                <label>
                    <input type="radio" name="processType" value="Documentacion" onChange={handleChange} checked={values.processType === 'Documentacion'} />
                    Documentación
                </label>
            </div>

            {touched.processType && errors.processType ? <div>{errors.processType}</div> : null}
        </div>
    );
};

export default Step2;
