import React from 'react'

const InputField = ({text, placeholder, name,value,handleChange,handleBlur,touched,errors}) => {
  return (
    <div className='flex  gap-4 border border-gray-400 rounded-2xl '>
      <label className='p-2'>
        {text}: 
      </label>
      <input 
         type="text" 
         name={name} 
         value={value} 
         onChange={handleChange} 
         onBlur={handleBlur} 
         placeholder={placeholder}
         />
      {touched && errors ? <div>{errors}</div> : null}

    </div>
  )
}

export default InputField