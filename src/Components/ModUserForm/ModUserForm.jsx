import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModUserForm.css';
import { checkError } from '../../utils';
import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import axios from 'axios';
import { connect } from 'react-redux';
import { UPDATE_CREDENTIALS } from '../../redux/types'

export const ModUserForm = (props) => {
  let navigate = useNavigate();
  let regexError;
  let passLengthError;
  let passMisError;

  //1-Hooks
  const [userData, setuserData] = useState({
    name: props.credentials.user.name,
    surname: props.credentials.user.surname,
    age: props.credentials.user.age,
    nickname: props.credentials.user.nickname,
    email: props.credentials.user.email,
    // password: "",
    // password2: ""
  });
  const [msg, setMsg] = useState("");
  const [errorMsg, seterrorMsg] = useState("");



  //useEffect
  //userData useEffect
  useEffect(() => {

  })


  //Handler function
  //Shows msgs while writting
  const fillForm = (e) => {
    //Set data
    setuserData({ ...userData, [e.target.name]: e.target.value })

    // //Check password min length
    // if (e.target.name == "password" && e.target.value.length < 6) {
    //   return (setMsgLength("Password must be 6 characters min"))
    // } else {
    //   setMsgLength("");
    // }

    // //Check password max length
    // if ((e.target.name == "password" && e.target.value.length > 10) || (e.target.name == "password2" && e.target.value.length > 10)) {
    //   return (setMsgLength("Password must be 10 characters max"))
    // } else {
    //   setMsgLength("");
    // }

    //Check passwords mismatching

    // if (e.target.name == "password" && e.target.value !== userData.password2) {
    //   return (setMsgMis("Passwords must match"))
    // } else if (e.target.name == "password2" && e.target.value !== userData.password) {
    //   return (setMsgMis("Passwords must match"))
    // } else {
    //   return (setMsgMis(""))
    // }



  }



  const update = async (id) => {

    let fieldsArr = Object.entries(userData);
    let error = "";
    seterrorMsg("");

    // //Inputs regex validation
    // for (let element of fieldsArr) {
    //   error = checkError(element[0], element[1]);
    //   if (error !== "ok") {
    //     seterrorMsg(error)
    //     regexError = true;
    //     return
    //   }
    // }
    // if (error == "ok") {
    //   seterrorMsg("")
    //   regexError = false;
    // }


    // //Password mismatch validation
    // if (userData.password !== userData.password2) {
    //   seterrorMsg("Passwords must match")
    //   passMisError = true;
    // } else {
    //   if (seterrorMsg == "") {
    //     seterrorMsg("")
    //     passMisError = false;
    //   }

    // }

    // //Password length validation
    // if ((userData.password.length < 6) || (userData.password.length > 10)) {
    //   seterrorMsg("Password must be between 6 and 10 characters")
    //   passLengthError = true;
    // } else {
    //   if (seterrorMsg == "") {
    //     seterrorMsg("")
    //     passLengthError = false;
    //   }

    // }

    let body = {
      // id: props.credentials.user.id,
      name: userData.name,
      surname: userData.surname,
      age: userData.age,
      nickname: userData.nickname,
      email: userData.email,
      // password: userData.password
    }
    console.log("soy body",body)
    let config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
  };
    let result;
    if (!regexError && !passMisError && !passLengthError) {
      try {

        result = await axios.put(`https://videostore-backend.herokuapp.com/users/profile/${id}`, body, config)


        // if (result.data != "The user with that email/nickname already figures in the database") {
        //   setTimeout(() => {
        //     setMsgLength(result.data)

        //     navigate("/")
        //   }, 1500)
        // } else {

        //   seterrorMsg(result.data)
        // }



      } catch (error) {
        console.log("Update error", error)
      }

      props.dispatch({type: UPDATE_CREDENTIALS, payload:result.data});
      if(result.data) {
        setMsg("The user has been updated")
      }
    }


  }

  return (
    <>
      <>
        {<pre>{JSON.stringify(userData, null, 2)}</pre>}
        {<pre>{JSON.stringify(msg, null, 2)}</pre>}
        {<pre>{JSON.stringify(errorMsg, null, 2)}</pre>}
      </>

      <TextInput
        // required
        label="Name"
        placeholder={props.credentials.user.name}
        onChange={(e) => { fillForm(e) }}
        name="name"
      />
      <TextInput
        // required
        label="Surname"
        placeholder={props.credentials.user.surname}
        onChange={(e) => { fillForm(e) }}
        name="surname"
      />
      <TextInput
        // required
        label="Age"
        placeholder={props.credentials.user.age}
        onChange={(e) => { fillForm(e) }}
        name="age"
        type="number"
      />
      <TextInput
        // required
        label="Nickname"
        placeholder={props.credentials.user.nickname}
        onChange={(e) => { fillForm(e) }}
        name="nickname"
      />
      <TextInput
        // required
        label="Email"
        placeholder={props.credentials.user.email}
        onChange={(e) => { fillForm(e) }}
        name="email"
      />
      {/* <TextInput
        required
        label="Password"
        type="password"
        placeholder="6 characters min"
        onChange={(e) => { fillForm(e) }}
        name="password"
      /> */}

      {/* <TextInput
        required
        label="Repeat your password"
        type="password"
        placeholder="6 characters min"
        onChange={(e) => { fillForm(e) }}
        name="password2"
      /> */}

      {/* <Checkbox
        mt="md"
        label="Ain't gonna read so I agree with whatever"
      /> */}

      <Button type="submit" onClick={() => update(props.credentials.user.id)}>Update Profile</Button>
      <br></br>
      <span className='errorMsg'>{errorMsg}</span>
      <br></br>
      <span className='okMsg'>{msg}</span>
      <br></br>
    </>
  )
}
export default connect((state) => ({
  credentials: state.credentials
}))(ModUserForm);