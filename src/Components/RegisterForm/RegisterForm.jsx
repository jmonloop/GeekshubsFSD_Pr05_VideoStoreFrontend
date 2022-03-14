import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import {checkError} from '../../utils';
import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import axios from 'axios';

export const RegisterForm = (props) => {
  let navigate = useNavigate();

    //1-Hooks
    const [userData, setuserData] = useState({
      name: "",
      surname: "",
      age: "",
      nickname: "",
      email: "",
      password: "",
      password2: ""
    });
    const [msg, setMsg] = useState("");
    const [errorMsg, seterrorMsg] = useState("");

    //Handler function
    const fillForm = (e) => {
      setuserData({ ...userData, [e.target.name]: e.target.value })
    }



  const register = async () => {
    setMsg("");

    let fieldsArr = Object.entries(userData);
    let error = "";

    //Password fields mismatching
    if(userData.password !== userData.password2) {
      return (seterrorMsg("Passwords must match"))
    } else {
       (seterrorMsg(""))
    }

    //Error inputs check with checkError function
    for(let element of fieldsArr) {
      error = checkError(element[0], element[1]);

      if(error !== "ok") {
        setMsg(error)
        return
      }
    }

    let body = {
      name: userData.name,
      surname: userData.surname,
      age: userData.age,
      nickname: userData.nickname,
      email: userData.email,
      password: userData.password
    }
    try {

      let result = await axios.post("https://videostore-backend.herokuapp.com/users/register")

      setTimeout(()=>{
        navigate("/")
      }, 1500)


    } catch(error) {
      console.log("Register error",error)
    }

  }

  return (
    <>
    <>
    {<pre>{JSON.stringify(userData, null,2)}</pre>}
    </>

      <TextInput
        required
        label="Name"
        placeholder=""
        onChange={(e) => { fillForm(e) }}
        name= "name"
      />
      <TextInput
        required
        label="Surname"
        placeholder=""
        onChange={(e) => { fillForm(e) }}
        name="surname"
      />
      <TextInput
        required
        label="Age"
        placeholder=""
        onChange={(e) => { fillForm(e) }}
        name="age"
      />
      <TextInput
        required
        label="Nickname"
        placeholder=""
        onChange={(e) => { fillForm(e) }}
        name="nickname"
      />
      <TextInput
        required
        label="Email"
        placeholder="your@email.com"
        onChange={(e) => { fillForm(e) }}
        name="email"
      />
      <TextInput
        required
        label="Password"
        type="password"
        placeholder="6 characters min"
        onChange={(e) => { fillForm(e) }}
        name="password"
      />

      <TextInput
        required
        label="Repeat your password"
        type="password"
        placeholder="6 characters min"
        onChange={(e) => { fillForm(e) }}
        name="password2"
      />

      <Checkbox
        mt="md"
        label="Ain't gonna read so I agree with whatever"
      />

      <Button type="submit" onClick={() => register()}>Submit</Button>
      <br></br>
      <span className='errorMsg'>{errorMsg}</span>
      <span className='okMsg'>{msg}</span>
    </>
  )
}
export default RegisterForm;