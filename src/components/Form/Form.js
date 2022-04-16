import React from 'react';


const Form = (props) => {
    
     const {inputType,inputName,lavel,required,validationMessage}=props.inputData
     
    return (
        <div className=''>
          <form className='p-3 m-2 '>
          <label  for={lavel} className=' pb-2 m-2'>{inputName}</label><br/>
           <input type={inputType} placeholder= {inputName}   name="fname" required={required} className="mt-3"/><br/>
           <p className='mt-2'>{validationMessage}</p>           
          </form>
         
          
          
        </div>
    );
};

export default Form;