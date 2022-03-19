import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModPassForm.css';
import { checkError } from '../../utils';
import { TextInput, Checkbox, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import axios from 'axios';
import { connect } from 'react-redux';
import { UPDATE_CREDENTIALS } from '../../redux/types'

export const ModPassForm = (props) => {
  let navigate = useNavigate();
  let regexError;
  let passLengthError;
  let passMisError;

  //1-Hooks
  const [userData, setuserData] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword2: ""
  });
  const [msg, setMsg] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const [msgLength, setMsgLength] = useState("");
  const [msgMis, setMsgMis] = useState("");



  //useEffect
  //userData useEffect
  useEffect(() => {

  })


  //Handler function
  //Shows msgs while writting
  const fillForm = (e) => {
    //Set data
    setuserData({ ...userData, [e.target.name]: e.target.value })

    //Check password min length
    if (e.target.name == "newPassword" && e.target.value.length < 6) {
      return (setMsgLength("Password must be 6 characters min"))
    } else {
      setMsgLength("");
    }

    //Check password max length
    if ((e.target.name == "newPassword" && e.target.value.length > 10) || (e.target.name == "password2" && e.target.value.length > 10)) {
      return (setMsgLength("Password must be 10 characters max"))
    } else {
      setMsgLength("");
    }

    //Check passwords mismatching

    if (e.target.name == "newPassword" && e.target.value !== userData.newPassword2) {
      return (setMsgMis("New passwords must match"))
    } else if (e.target.name == "newPassword2" && e.target.value !== userData.newPassword) {
      return (setMsgMis("New passwords must match"))
    } else {
      return (setMsgMis(""))
    }



  }



  const update = async () => {

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


    //Password mismatch validation
    if (userData.newPassword !== userData.newPassword2) {
      seterrorMsg("New passwords must match")
      passMisError = true;
    } else {
      if (seterrorMsg == "") {
        seterrorMsg("")
        passMisError = false;
      }

    }

    //Password length validation
    if ((userData.newPassword.length < 6) || (userData.newPassword.length > 10)) {
      seterrorMsg("New password must be between 6 and 10 characters")
      passLengthError = true;
    } else {
      if (seterrorMsg == "") {
        seterrorMsg("")
        passLengthError = false;
      }

    }

    let body = {
      id: props.credentials.user.id,
      oldPassword: userData.oldPassword,
      newPassword: userData.newPassword
    }

    let config = {
      headers: { Authorization: `Bearer ${props.credentials.token}` }
  };
    let result;
    if (!regexError && !passMisError && !passLengthError) {
      try {

        result = await axios.put(`https://videostore-backend.herokuapp.com/users/newpassword`, body, config)

      } catch (error) {
        console.log("Update error", error)
      }
      
      if(result.data) {
        setMsg("The password has been updated")
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
        required
        label="Old Password"
        type="password"
        placeholder="Your actual password"
        onChange={(e) => { fillForm(e) }}
        name="oldPassword"
      />

      <TextInput
        required
        label="New password"
        type="password"
        placeholder="6 characters min"
        onChange={(e) => { fillForm(e) }}
        name="newPassword"
      />

<TextInput
        required
        label="Repeat your new password"
        type="password"
        placeholder="6 characters min"
        onChange={(e) => { fillForm(e) }}
        name="newPassword2"
      />


      <Button type="submit" onClick={() => update()}>Update Profile</Button>
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
}))(ModPassForm);