import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { ADMIN_MOD } from '../../redux/types';
//Importo styled-components
import styled from 'styled-components';
//Importo componente prefabricado 'Burger' de mantine
import { ScrollArea } from '@mantine/core';
import { root, API_KEY } from '../../utils';
import PaginationComp from '../../Components/Pagination/Pagination';
import { Table } from '@mantine/core';
import './Admin.css'

import AdminForm from '../../Components/AdminForm/AdminForm'


//Importo todo lo que venga de ModUserModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as SS from '../../Components/ModUserModal/StModUserModal';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StAdmin.jsx';

let res;

const Admin = (props) => {
    //vars
    let navigate = useNavigate();
    let hooksChanged;



    // hooks
    const [usersArr, setusersArr] = useState([])
    const [filmsArr, setfilmsArr] = useState([])
    const [ordersArr, setordersArr] = useState([])
    const [user, setuser] = useState({})


    //Mantine hooks
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';


    const getUsers = async () => {
        let results = [];
        try {
            //Endpoint for retrieving a full users report
            results = await axios.get(`https://videostore-backend.herokuapp.com/users`)

        } catch (error) {
            console.log("Get orders error = ", error)
        }

        setusersArr(results.data)
        console.log("ejecuto getUsers")

    }
    const getFilms = async () => {
        let results = [];
        try {
            //Endpoint for retrieving a full users report
            results = await axios.get(`https://videostore-backend.herokuapp.com/films`)

        } catch (error) {
            console.log("Get films error = ", error)
        }

        setfilmsArr(results.data)
        console.log("ejecuto getFilms")
    }
    const getOrders = async () => {
        let results = [];
        try {
            //Endpoint for retrieving a full orders report
            results = await axios.get(`https://videostore-backend.herokuapp.com/orders`)

        } catch (error) {
            console.log("Get orders error = ", error)
        }

        setordersArr(results.data)
        console.log("ejecuto getOrders")

    }



    const editUser = async (id) => {
        let result;
        try {
            result = await axios.get(`https://videostore-backend.herokuapp.com/users/getbyid/${id}`)

        } catch (error) {
            console.log("Edit user error", error)
        }
        console.log("soy result" ,result)
        props.dispatch({type:ADMIN_MOD, payload: result.data});

    }



    const usersRows = usersArr.map((elmnt) => {
        return (

            <tr className='row'
                key={elmnt.id}
                onClick={() => { editUser(elmnt.id); setOpened(true) }}
            >
                <>
            <SS.MyModal
                opened={opened}
                onClose={() => setOpened(false)}
            // title="Sign Up"
            >
                <AdminForm></AdminForm>
                {/* <ModUserForm></ModUserForm> */}
            </SS.MyModal>
        </>

                <td>{elmnt.id}</td>
                <td>{elmnt.name}</td>
                <td>{elmnt.age}</td>
                <td>{elmnt.email}</td>
                <td>{elmnt.nickname}</td>
                <td>{elmnt.rol}</td>
                <td>{elmnt.createdAt}</td>

            </tr>
        )
    })
    const filmsRows = filmsArr.map((elmnt) => {
        return (
            <tr key={elmnt.id}>
                <td>{elmnt.id}</td>
                <td>{elmnt.title}</td>
                <td>{elmnt.createdAt}</td>
            </tr>
        )
    })
    const ordersRows = ordersArr.map((elmnt) => {
        return (
            <tr key={elmnt.orderNumber}>
                <td>{elmnt.orderNumber}</td>
                <td>{elmnt.price}</td>
                <td>{elmnt.userName}</td>
                <td>{elmnt.userEmail}</td>
                <td>{elmnt.filmTitle}</td>
                <td>{elmnt.outDate}</td>
            </tr>
        )
    })

    const usersThs = (
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>NICKNAME</th>
            <th>ROL</th>
            <th>CREATED AT</th>
        </tr>
    )

    const filmsThs = (
        <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CREATED AT</th>
        </tr>
    )
    const ordersThs = (
        <tr>
            <th>ID</th>
            <th>PRICE</th>
            <th>OWNER NAME</th>
            <th>OWNER EMAIL</th>
            <th>MOVIE TITLE</th>
            <th>ORDER DATE</th>
        </tr>
    )


    //useEffects
    useEffect(() => {

        console.log("me monto")

        if (props.credentials.user.rol !== "admin") {
            navigate("/");
        }

        getUsers();
        getFilms();
        getOrders();

    }, []);


    useEffect(() => {


        console.log("me actualizo")

    });

    useEffect(() => {
        return () => {
            console.log("me desmonto")
        };
    });


    return (
        <>
            <S.adminContainer>
                <S.adminTitle>ADMIN</S.adminTitle>
                <S.adminBox>
                    <S.usersDiv>
                        <S.sectionTitle>USERS</S.sectionTitle>
                        <ScrollArea style={{ width: 600, height: 200 }}>
                            <S.tableDiv style={{ width: 600 }}>
                                <Table striped highlightOnHover>
                                    <caption>Click in a row to edit</caption>
                                    <thead>{usersThs}</thead>
                                    <tbody>{usersRows}</tbody>
                                </Table>
                            </S.tableDiv>
                        </ScrollArea>
                    </S.usersDiv>
                    <S.filmsDiv>
                        <S.sectionTitle>MOVIES</S.sectionTitle>
                        <ScrollArea style={{ width: 600, height: 200 }}>
                            <S.tableDiv style={{ width: 600 }}>
                                <Table striped highlightOnHover>
                                    <caption>Click in a row to edit</caption>
                                    <thead>{filmsThs}</thead>
                                    <tbody>{filmsRows}</tbody>
                                </Table>
                            </S.tableDiv>
                        </ScrollArea>
                    </S.filmsDiv>
                    <S.ordersDiv>
                        <S.sectionTitle>ORDERS</S.sectionTitle>
                        <ScrollArea style={{ width: 600, height: 200 }}>
                            <S.tableDiv style={{ width: 600 }}>
                                <Table striped highlightOnHover>
                                    <caption>Click in a row to edit</caption>
                                    <thead>{ordersThs}</thead>
                                    <tbody>{ordersRows}</tbody>
                                </Table>
                            </S.tableDiv>
                        </ScrollArea>
                    </S.ordersDiv>
                </S.adminBox>
            </S.adminContainer >
        </>

    )

}


export default connect((state) => ({
    credentials: state.credentials,
    ordersData: state.ordersData,

}))(Admin);