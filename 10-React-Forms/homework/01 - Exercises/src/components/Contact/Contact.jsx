import React from 'react'
import './Contact.modules.css'
//import { validate } from './validate';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors = {};

  if(!inputs.name) //si es un string vacio
  {
      errors.name = "Se requiere un nombre";  
  }
  if(!regexEmail.test(inputs.email)){
      errors.email = "Debe ser un correo electrónico"
  }
  if(inputs.phone < 0){
      errors.phone = "Sólo números positivos"
  }
  if(!inputs.subject){
      errors.subject = "Se requiere un asunto"
  }
  if(!inputs.message){
      errors.message = "Se requiere un mensaje"
  }
  return errors;
}



export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    // e= { target: {value: "hola", name:"email"} }
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...inputs,
      [e.target.name] : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!Object.keys(errors).length){
      window.alert("Datos completos");    
  
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: '',
      })
  
      // setErrors({
      //   name: '',
      //   email: '',
      //   phone: '',
      //   subject: '',
      //   message: '',
      // })
    } else{
      window.alert("Debes corregir los errores");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input 
          name="name"
          value={inputs.name} 
          placeholder='Escribe tu nombre...' 
          type="text"
          onChange={handleChange}
          className={errors.name && "warning"}
        />
        <p className='danger'>{errors.name}</p>

        <label>Correo Electrónico:</label>
        <input
          name="email" 
          value={inputs.email} 
          placeholder='Escribe tu email...' 
          type="text"
          onChange={handleChange}
          className={errors.email && "warning"}
        />
        <p className='danger'>{errors.email}</p>

        <label>Teléfono:</label>
        <input 
          name="phone" 
          value={inputs.phone} 
          placeholder='Escribe un teléfono...' 
          type="number" 
          onChange={handleChange} 
          className={errors.phone && "warning"}      
        />
        <p className='danger'>{errors.phone}</p>

        <label>Asunto:</label>
        <input 
          name="subject"           
          placeholder='Escribe el asunto...' 
          type="text"
          value={inputs.subject} 
          onChange={handleChange}  
          className={errors.subject && "warning"}    
        />
        <p className='danger'>{errors.subject}</p>

        <label>Mensaje:</label>
        <textarea 
          name="message" 
          value={inputs.message} 
          placeholder='Escribe tu mensaje...' 
          type="text" 
          onChange={handleChange} 
          className={errors.message && "warning"}      
        />
        <p className='danger'>{errors.message}</p>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
