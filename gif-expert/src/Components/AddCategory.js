//rafc

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const ChangeInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const HandledSumit = (e) =>{
        e.preventDefault();

        if (inputValue.trim().length < 3 ) {
            alert('Por favor ingresar una categoria con mas de dos carácteres');
            return;
        }
        setCategories( (cats)=> [  inputValue , ...cats ]);
        setInputValue('');        
    }

    return (
        <form onSubmit={HandledSumit}>
            <input
                type="text"
                value={inputValue}
                onChange= { ChangeInputChange }
            />
        </form>
    )
}

AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired
}
