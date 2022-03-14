import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import { checkError } from '../../utils';
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
  const [msg2, setMsg2] = useState("");
  const [errorMsg, seterrorMsg] = useState("");



  //useEffect
  //userData useEffect
  useEffect(() => {

  })


  //Handler function
  const fillForm = (e) => {
    //Set data while writting
    setuserData({ ...userData, [e.target.name]: e.target.value })

    //Password min length checking
    if (e.target.name == "password" && e.target.value.length < 6) {
      return (setMsg2("Password must be 6 characters min"))
    } else {
      setMsg2("");
    }

    //Password max length checking
    if (e.target.name == "password" && e.target.value.length > 10) {
      return (setMsg2("Password must be 10 characters max"))
    } else {
      setMsg2("");
    }


    //Password fields mismatching
    if(e.target.name == "password" || e.target.name == "password2") {
      if (e.target.name == "password" && e.target.value !== userData.password2) {
        return (setMsg("Passwords must match"))
      } else if (e.target.name == "password2" && e.target.value !== userData.password) {
        return (setMsg("Passwords must match"))
      } else {
        return (setMsg(""))
      }
    } else (setMsg(""))


  }



  const register = async () => {
    setMsg("");

    let fieldsArr = Object.entries(userData);
    let error = "";

    //Error inputs check with checkError function
    for (let element of fieldsArr) {
      error = checkError(element[0], element[1]);

      if (error !== "ok") {
        seterrorMsg(error)
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

      setTimeout(() => {
        navigate("/")
      }, 1500)


    } catch (error) {
      console.log("Register error", error)
    }

  }

  return (
    <>
      <>
        {<pre>{JSON.stringify(userData, null, 2)}</pre>}
      </>

      <TextInput
        required
        label="Name"
        placeholder=""
        onChange={(e) => { fillForm(e) }}
        name="name"
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
      <br></br>
      <span className='okMsg'>{msg}</span>
      <br></br>
      <span className='okMsg'>{msg2}</span>
    </>
  )
}
export default RegisterForm;