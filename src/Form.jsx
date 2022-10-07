import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const Form = () => {
    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");



  const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const regexName = /^[a-z ,.'-]+$/i;

  const regexDni = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;

  const handleSubmit = (e) =>{
    e.preventDefault();

    let x = 0;

    if(name === '' || !regexName.test(name)){
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un nombre valido!',
          })
    }else{
        x++
    }
    if(apellido === '' || !regexName.test(apellido)){
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un apellido valido!',
          })
    }else{
        x++
    }
    if(dni === '' || !regexDni.test(dni)){
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un DNI valido!',
          })
    }else{
        x++
    }
    if(email === '' || !regexEmail.test(email)){
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un email valido!',
          })
    }else{
        x++
    }

   
    if(x === 4){
        MySwal.fire(
            'Buen trabajo!',
            'Datos enviados!',
            'success'
          )
    }
    const newData = {
        name: name,
        apellido: apellido,
        dni: dni,
        email: email
    }
    
  }

  return (
    <section className="container my-5 d-flex justify-content-center">
      <form className="form p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-light">Nombre</label>
          <input
            type="text"
            className="form-control"
            maxLength={15}
            placeholder="Ingrese su nombre"
            required
            onChange={(e) => {setName(e.target.value)}}
            
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">Apellido</label>
          <input
            type="text"
            className="form-control"
            maxLength={15}
            placeholder="Ingrese su apellido"
            required
            onChange={(e) => {setApellido(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">DNI</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ingrese su DNI"
            required
            onChange={(e) => {setDni(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese su email"
            required
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <button className="btn btn-success d-flex justify-content-between boton">
          Submit
        </button>
      </form>
    </section>
  );
};
