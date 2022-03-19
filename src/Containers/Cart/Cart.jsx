import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { root, API_KEY } from '../../utils';
import PaginationComp from '../../Components/Pagination/Pagination';
import { Table } from '@mantine/core';
import { SquareX, ArrowBigRightLine } from 'tabler-icons-react';
import { ScrollArea } from '@mantine/core';
import { MOVIE_DETAIL, ADD_TO_cart, REMOVE_FROM_CART, CLEAR_CART } from '../../redux/types'
import moment from 'moment'
import '../Cart/Cart.css'


//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StCart.jsx';
import * as SS from '../../Components/ModUserModal/StModUserModal';
import ModUserModal from '../../Components/ModUserModal/ModUserModal';
import ModPassModal from '../../Components/ModPassModal/ModPassModal';
import AdminForm from '../../Components/AdminForm/AdminForm'

let res;

const Cart = (props) => {
    //vars
    let navigate = useNavigate();

    //hooks
    const [cartArr, setcartArr] = useState([])
    const [ordersArr, setordersArr] = useState([])
    const [ordersChanged, setordersChanged] = useState(false)
    const [msg, setMsg] = useState("");


    //Mantine hooks
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    //useEffects
    useEffect(() => {

    }, []);

    useEffect(() => {
    }, []);

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    }, []);

    const orderToBack = async (filmId) => {
        let results;
        let currentDate = moment().format('YYYY/MM/DD');
        let returnDate = moment().add(15, 'days').format('YYYY/MM/DD')

        let body = {
            filmId: filmId,
            userId: props.credentials.user.id,
            price: 3,
            outDate: currentDate,
            returnDate: returnDate
        }

        try {
            results = await axios.post(`https://videostore-backend.herokuapp.com/orders`, body)
            setordersChanged(true)
            // console.log("1 ORDER HECHA CON: ", body)
        } catch (error) {
            console.log('Create order error = ', error)
        }

        setordersChanged(false);

    }

    const makeOrders = () => {
        for (let i = 0; i < props.cart.cart.length; i++) {
            orderToBack(props.cart.cart[i].id)
        }
        setMsg(`${props.cart.cart.length} orders have been confirmed succesfully!`)

        props.dispatch({ type: CLEAR_CART });
    }

    const usersThs = (
        <tr>
            <th>MOVIES</th>
        </tr>
    )

    const removeFromCart = (id) => {
        console.log("id que entra", id)
        props.dispatch({ type: REMOVE_FROM_CART, payload: id });
    }


    const usersRows = props.cart.cart.map((elmnt) => {

        return (

            <tr className='row' key={elmnt.id}>
                <td>{elmnt.title}</td>
                <td onClick={() => { removeFromCart(elmnt.id); }}>
                    <SquareX></SquareX>
                </td>
            </tr>
        )
    })




    if (props.cart.cart.length !== 0) {
        return (
            <S.cartContainer>
                <S.cartBox>
                    <S.contentDiv>
                        <S.sectionTitle>SHOPPING CART</S.sectionTitle>
                        <S.tableDiv style={{ width: 600 }}>
                            <Table striped highlightOnHover>
                                <caption></caption>
                                <thead>{usersThs}</thead>
                                <tbody>{usersRows}</tbody>
                            </Table>
                            <div className='confirmBttn' onClick={() => makeOrders()}>CONFIRM ORDER<ArrowBigRightLine></ArrowBigRightLine></div>
                            <span>{msg}</span>
                        </S.tableDiv>
                    </S.contentDiv>

                </S.cartBox>

            </S.cartContainer >
        )
    } else {
        return (
            <S.cartContainer>
                <S.cartBox>
                    <S.contentDiv>
                        <S.sectionTitle>SHOPPING CART</S.sectionTitle>
                        <S.tableDiv className='table'>
                            {/* <S.tableDiv style={{ width: 600 }}> */}
                            <Table striped highlightOnHover>
                                <caption>There are no items in your cart yet</caption>
                            </Table>
                            <span>{msg}</span>
                        </S.tableDiv>
                    </S.contentDiv>

                </S.cartBox>

            </S.cartContainer >
        )
    }

}


export default connect((state) => ({
    credentials: state.credentials,
    ordersData: state.ordersData,
    cart: state.cart
}))(Cart);