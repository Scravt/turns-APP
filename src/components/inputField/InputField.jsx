import React from 'react'

const InputField = ({text, placeholder, name,value,handleChange,handleBlur,touched,errors}) => {
  return (
    <div className='"mb-5 flex flex-col gap-2'>
      <label className='"text-medium mb-1"'>
        {text}: 
      </label>
      <input 
      className=' border text-black bg-white border-gray-300 border-solid rounded-md p-2 text-base text-start'
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