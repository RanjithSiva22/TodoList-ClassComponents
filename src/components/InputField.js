import React from 'react';

function InputField({type,input,inputHandler}) {
    return (
        <input type={type} value={input} onChange={inputHandler}></input>
    );
   
}
export default InputField;