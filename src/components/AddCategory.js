import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);
        //console.log(`handleChange take place`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log(`handleSubmit take place with value: "${inputValue}"`);

        if (inputValue.trim().length > 0 ) {
            setCategories(cat => [inputValue, ...cat]);
            //console.log(`setCategories called with value: "${inputValue}"`);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
