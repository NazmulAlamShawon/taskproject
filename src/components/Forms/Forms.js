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
          <h1 className='mb-3'>Form validation</h1>
         <form className='border-2 w-60 mx-auto rounded' >
         
             {

                array.map(inputData => <Form inputData = {inputData} ></Form> ) 
             }
             <input className='border-2 p-3 mb-2' type="submit" value="Submit"   />  
         </form>
        </div>
    );
};

export default Forms;