import React from "react";
import { useDispatch} from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {

  const dispatch = useDispatch();

  const [form, setForm] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = () => {
    dispatch(enviarForm(form));
    setForm({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
  })
  }

  return (
    <div className="contactBg">
      <input onChange={handleInput} name="nombre"></input>
      <input onChange={handleInput} name="email"></input>
      <input onChange={handleInput} name="asunto" ></input>
      <input onChange={handleInput} name="mensaje"></input>
      <button onClick={handleSubmit}>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
