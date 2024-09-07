import React from 'react'

const InputField = ({ handleChange, value, title, name }) => {
    return (
        <label className='sidebar-label-container'>
            <input
                type="radio"
                value={value}
                name={name}
                onChange={handleChange}
            />
            <span className='checkmark'></span>{title}
        </label>
    );
};

export default InputField;
