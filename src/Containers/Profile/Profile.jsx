import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import { USER_ORDERS } from '../../redux/types';
import { root, API_KEY } from '../../utils';
import PaginationComp from '../../Components/Pagination/Pagination';
import { Table } from '@mantine/core';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StProfile.jsx';

let res;

const Profile = (props) => {
    //vars
    let navigate = useNavigate();

    //hooks
    const [ordersArr, setordersArr] = useState([])

    //useEffects
    useEffect(() => {

    }, []);

    useEffect(() => {
    }, []);

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
        refreshUserOrders()
    },[]);


    const refreshUserOrders = async () => {
        let results = [];
        try {
            //Endpoint for retrieving all orders from a user
            results = await axios.get(`https://videostore-backend.herokuapp.com/orders/${props.credentials.user.id}`)

        } catch (error) {
            console.log("Refresh orders error = ", error)
        }

        setordersArr(results.data)

    }






    if(ordersArr!== 'There are no fields with the searched term') {
        return (
            <S.profileContainer>
                <S.profileBox>
                    <Table>
                        <tbody>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>Nickname</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {props.credentials.user.nickname}
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>Email</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {props.credentials.user.id}
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>Name</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {props.credentials.user.name}
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>Surname</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {props.credentials.user.surname}
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>User Orders</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {
                                                ordersArr.map(elmnt => {
                                                    return (
                                                        <span key={elmnt.orderNumber} >{elmnt.filmTitle}</span>
                                                    )
                                                })
                                            }
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                        </tbody>
                    </Table>
                </S.profileBox>
            </S.profileContainer >
        )
    } else {
        return (
            <S.profileContainer>
                <S.profileBox>
                    <Table>
                        <tbody>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>Nickname</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {props.credentials.user.nickname}
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>Email</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {props.credentials.user.email}
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>Name</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {props.credentials.user.name}
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>Surname</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                            {props.credentials.user.surname}
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                            <tr>
                                <S.profileRow>
                                    <td>
                                        <S.profileKey>User Orders</S.profileKey>
                                    </td>
                                    <td>
                                        <S.profileValue>
                                           There are no orders yet
                                        </S.profileValue>
                                    </td>
                                </S.profileRow>
                            </tr>
                        </tbody>
                    </Table>
                </S.profileBox>
            </S.profileContainer >
        )
    }
}


export default connect((state) => ({
    credentials: state.credentials,
    ordersData: state.ordersData
}))(Profile);