import React from 'react';
import Form from '../Form/Form';
const array = [
    {
      inputName: "firstName",
      lavel: "First Name",
      inputType: "text",
      required: true,
      validationMessage: "First name field is required",
    },
    
    {
      inputName: "lastName",
      lavel: "Last Name",
      inputType: "text",
      required: true,
      validationMessage: "Last name field is required",
    },
    
    {
      inputName: "email",
      lavel: "Email",
      inputType: "email",
      required: true,
      validationMessage: "Email must be valid",
    },
   ];
   
const Forms = () => {
    return (
        <div className='mt-6 bg-slate-600  p-3 '>
        
         <form className='border-2 rounded '>
             {

                array.map(inputData => <Form inputData = {inputData} ></Form> ) 
             }
             <button className='bg-indigo-500 p-3 mt-3'>submit</button>
         </form>
        </div>
    );
};

export default Forms;