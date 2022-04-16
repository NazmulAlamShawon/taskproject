import React from 'react';

const Form = (props) => {
    
     const {inputType,inputName,lavel,required,validationMessage}=props.inputData
    return (
        <>
          <form className='p-3'>
          <label  for={lavel} className='p-3'>{inputName}</label><br/>
           <input type={inputType} placeholder= {inputName}  name="fname" required={required} /><br/>
             
          </form>
         
          
          
        </>
    );
};

export default Form;