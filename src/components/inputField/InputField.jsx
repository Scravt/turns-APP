import React from 'react'

const InputField = ({ text, placeholder, name, value, handleChange, handleBlur, touched, errors }) => {
  return (
    <div className='"mb-5 flex flex-col '>
      <label className='"text-xs mb-1"'>
        {text}:
      </label>
      <input
        className="border rounded-lg py-2 px-3 text-sm w-full  "
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