import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
//Importo styled-components
import styled from 'styled-components';
//Importo componente prefabricado 'Burger' de mantine
import { ScrollArea } from '@mantine/core';
import { MOVIE_DETAIL } from '../../redux/types';
import { USER_ORDERS } from '../../redux/types';
import { root, API_KEY } from '../../utils';
import PaginationComp from '../../Components/Pagination/Pagination';
import { Table } from '@mantine/core';

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
                        <ScrollArea style={{ width: 300, height: 200 }}>
                            <div style={{ width: 600}}>
                                <S.tableBody>
                                    <td>
                                        <th>Name</th>
                                        {
                                            usersArr.map(elmnt => {
                                                console.log(usersArr)
                                                return (
                                                    <>
                                                        <tr><span>{elmnt.name} </span></tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        <th>Surname</th>
                                        {
                                            usersArr.map(elmnt => {
                                                console.log(usersArr)
                                                return (
                                                    <>
                                                        <tr><span>{elmnt.surname} </span></tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        <th>Age</th>
                                        {
                                            usersArr.map(elmnt => {
                                                console.log(usersArr)
                                                return (
                                                    <>
                                                        <tr><span>{elmnt.age} </span></tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        <th>Email</th>
                                        {
                                            usersArr.map(elmnt => {
                                                console.log(usersArr)
                                                return (
                                                    <>
                                                        <tr><span>{elmnt.email} </span></tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        <th>Nickname</th>
                                        {
                                            usersArr.map(elmnt => {
                                                console.log(usersArr)
                                                return (
                                                    <>
                                                        <tr><span>{elmnt.nickname} </span></tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        <th>Rol</th>
                                        {
                                            usersArr.map(elmnt => {
                                                console.log(usersArr)
                                                return (
                                                    <>
                                                        <tr><span>{elmnt.rol} </span></tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </td>
                                </S.tableBody>

                            </div>
                        </ScrollArea>
                    </S.usersDiv>
                    <S.filmsDiv>
                        <S.sectionTitle>MOVIES</S.sectionTitle>
                    </S.filmsDiv>
                    <S.ordersDiv>
                        <S.sectionTitle>ORDERS</S.sectionTitle>
                    </S.ordersDiv>
                </S.adminBox>
            </S.adminContainer >
        </>

    )

}


export default connect((state) => ({
    credentials: state.credentials,
    ordersData: state.ordersData
}))(Admin);