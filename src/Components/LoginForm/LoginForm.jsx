import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

import axios from 'axios';

import { TextInput, Checkbox, Button } from '@mantine/core';

//REDUX...
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

export const LoginForm = (props) => {
  let navigate = useNavigate();

  //1-Hooks
  const [userData, setuserData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [errorMsg, seterrorMsg] = useState("");


  //Handler funcs
  const fillForm = (e) => {
    //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
    //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
    //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
    setuserData({ ...userData, [e.target.name]: e.target.value })
  };

  //Local funcs
  const login = async () => {

    try {

      let body = {
        email: userData.email,
        password: userData.password
      }

      let result = await axios.post("https://videostore-backend.herokuapp.com/users/login", body);

      //Cambiamos el valor del hook credenciales, por lo tanto se recargará el componente
      if (result.data === "Invalid email or password") {
        seterrorMsg(result.data)
      } else {
        setMsg(result.data.loginOKmessage)
        // console.log(result.data)
        //Guardaríamos los datos en redux...

        setTimeout(() => {
          //     navigate("/");
          props.dispatch({ type: LOGIN, payload: result.data });
        }, 1500);
      }


    } catch (error) {
      console.log(error)
    }


  };


  return (

    <>
      <TextInput
        required
        label="Email"
        name="email"
        placeholder="your@email.com"
        onChange={(e) => { fillForm(e) }}
      />
      <TextInput
        required
        label="Password"
        name="password"
        type='password'
        placeholder="6 characters min"
        onChange={(e) => { fillForm(e) }}
      />

      <Checkbox
        mt="md"
        label="Remember Me"
        name="rememberMe"
      // {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Button type="submit" onClick={() => login()}>Submit</Button>
      <br></br>
      <span className='errorMsg'>{errorMsg}</span>
      <span className='okMsg'>{msg}</span>
    </>
  )
}
export default connect()(LoginForm);