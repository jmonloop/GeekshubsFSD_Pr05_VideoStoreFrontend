import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminForm.css';
import { checkError } from '../../utils';
import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import axios from 'axios';
import { connect } from 'react-redux';
import { ADMIN_MOD } from '../../redux/types'

export const AdminForm = (props) => {
  let navigate = useNavigate();
  let regexError;
  let passLengthError;
  let passMisError;
  let config = {
    headers: { Authorization: `Bearer ${props.credentials.token}` }
  }

  //1-Hooks
  const [userData, setuserData] = useState({
    name: props.adminData.user.name,
    surname: props.adminData.user.surname,
    age: props.adminData.user.age,
    nickname: props.adminData.user.nickname,
    email: props.adminData.user.email,
    // password: "",
    // password2: ""
  });
  const [msg, setMsg] = useState("");
  const [errorMsg, seterrorMsg] = useState("");



  //useEffect
  //userData useEffect
  useEffect(() => {
    console.log("soy userData", userData)
    console.log("soy redux", props.adminData)
  }, [])


  //Handler function
  //Shows msgs while writting
  const fillForm = (e) => {
    //Set data
    setuserData({ ...userData, [e.target.name]: e.target.value })
  }

  const update = async (id) => {

    let error = "";
    seterrorMsg("");


    let body = {
      name: userData.name,
      surname: userData.surname,
      age: userData.age,
      nickname: userData.nickname,
      email: userData.email,

    }

    let result;

    try {

      result = await axios.put(`https://videostore-backend.herokuapp.com/users/profile/${id}`, body, config)

    } catch (error) {
      console.log("Update error", error)
    }

    if (result.data) {
      setMsg("The user has been updated")
    }
    props.dispatch({ type: ADMIN_MOD, payload: result.data });

  }

  const destroy = async (id) => {
    let result;
    try {
      result = await axios.delete(`https://videostore-backend.herokuapp.com/users/${id}`, config);
    } catch (error) {
      console.log("Destroy error= ", error)
    }
    if (result.data) {
      console.log("result delete", result.data)
      setMsg("The user has been removed from the database")
    }

  }


  return (
    <>
      <>
        {<pre>{JSON.stringify(userData, null, 2)}</pre>}
        {<pre>{JSON.stringify(msg, null, 2)}</pre>}
        {<pre>{JSON.stringify(errorMsg, null, 2)}</pre>}
        ADMIN FORM
      </>

      <TextInput
        // required
        label="Name"
        placeholder={props.adminData.user.name}
        onChange={(e) => { fillForm(e) }}
        name="name"
      />
      <TextInput
        // required
        label="Surname"
        placeholder={props.adminData.user.surname}
        onChange={(e) => { fillForm(e) }}
        name="surname"
      />
      <TextInput
        // required
        label="Age"
        placeholder={props.adminData.user.age}
        onChange={(e) => { fillForm(e) }}
        name="age"
        type="number"
      />
      <TextInput
        // required
        label="Nickname"
        placeholder={props.adminData.user.nickname}
        onChange={(e) => { fillForm(e) }}
        name="nickname"
      />
      <TextInput
        // required
        label="Email"
        placeholder={props.adminData.user.email}
        onChange={(e) => { fillForm(e) }}
        name="email"
      />


      <Button type="submit"
        onClick={() => update(props.adminData.user.id)}
      >Update Profile</Button>


      <Button className='deleteBttn'
        onClick={() => destroy(props.adminData.user.id)}
      >Delete Profile</Button>

      <br></br>
      <span className='errorMsg'>{errorMsg}</span>
      <br></br>
      <span className='okMsg'>{msg}</span>
      <br></br>
    </>
  )
}
export default connect((state) => ({
  adminData: state.adminData,
  credentials: state.credentials
}))(AdminForm);