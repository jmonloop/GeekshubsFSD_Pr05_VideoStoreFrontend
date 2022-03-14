
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT, USER_ORDERS } from '../../redux/types';
import { connect } from 'react-redux';
import axios from 'axios';



import { useState } from 'react';



import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StHambModal.jsx';


const HambModal = (props) => {
    //variables
    let navigate = useNavigate();


    //hooks
    const [RenderLoginForm, setRenderLoginForm] = useState(false)
    const [RenderRegisterForm, setRenderRegisterForm] = useState(false)
    //Mantine hooks
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    //useEffects
    useEffect(() => {

    },[])

    //funcs
    const GoTo = (place) => {
        navigate(place)
    }

    const getOrders = async () => {
        let ordersArr = [];
        try {
            ordersArr = await axios.get(`https://videostore-backend.herokuapp.com/orders/${props.credentials.user.id}`)

        } catch (error) {
            console.log(error)
        }

        //Guardamos datos de pedidos de usuario en redux
        props.dispatch({ type: USER_ORDERS, payload: ordersArr.data });


    }


    const Logout = () => {
        setRenderLoginForm(false)

        //Borrar de RDX las credenciales
        setTimeout(() => {
            props.dispatch({ type: LOGOUT });
        }, 500)
    }



    //renders
    if ((!props.credentials?.token)) {
        if ((!RenderLoginForm) && (!RenderRegisterForm)) {
            return (
                <>
                    <S.MyModal
                        opened={opened}
                        onClose={() => {
                            setOpened(false);
                            //Delay forms render for not to close while is rendering back
                            setTimeout(() => {
                                setRenderLoginForm(false);
                                setRenderRegisterForm(false)
                            }, 500)

                        }}
                    //  title="Sign Up"
                    >
                        <S.Link onClick={() => { setRenderLoginForm(true) }}>
                            Login</S.Link>,
                        <S.Link onClick={() => { setRenderRegisterForm(true) }}>
                            Register</S.Link>

                    </S.MyModal>

                    <S.MyGroup position="center">
                        {/* Pinto el elemento MyBurger que viene de la hoja styled */}
                        <S.MyBurger color="white" onClick={() => setOpened(true)}>Open Modal</S.MyBurger>
                    </S.MyGroup>
                </>
            );
        } else if (RenderLoginForm) {
            return (
                <>
                    <S.MyModal
                        opened={opened}
                        onClose={() => {
                            setOpened(false);
                            //Delay forms render for not to close while is rendering back
                            setTimeout(() => {
                                setRenderLoginForm(false);
                                setRenderRegisterForm(false)
                            }, 500)

                        }}
                    //  title="Sign Up"
                    >
                        <LoginForm></LoginForm>

                    </S.MyModal>

                    <S.MyGroup position="center">
                        {/* Pinto el elemento MyBurger que viene de la hoja styled */}
                        <S.MyBurger color="white" onClick={() => setOpened(true)}>Open Modal</S.MyBurger>
                    </S.MyGroup>
                </>
            );
        } else if (RenderRegisterForm) {
            return (
                <>
                    <S.MyModal
                        opened={opened}
                        onClose={() => {
                            setOpened(false);
                            //Delay forms render for not to close while is rendering back
                            setTimeout(() => {
                                setRenderLoginForm(false);
                                setRenderRegisterForm(false)
                            }, 500)

                        }}
                    //  title="Sign Up"
                    >
                        <RegisterForm></RegisterForm>

                    </S.MyModal>

                    <S.MyGroup position="center">
                        {/* Pinto el elemento MyBurger que viene de la hoja styled */}
                        <S.MyBurger color="white" onClick={() => setOpened(true)}>Open Modal</S.MyBurger>
                    </S.MyGroup>
                </>
            );
        }

    } else {
        return (
            <>
                <S.MyModal
                    opened={opened}
                    onClose={() => setOpened(false)}
                // title="Sign Up"
                >

                    <S.Link onClick={() => {
                        GoTo('/profile');
                        setOpened(false);
                        getOrders()
                    }}>{props.credentials?.user.nickname}
                    </S.Link>
                    <S.Link onClick={() => {
                        Logout();
                        GoTo('/');
                        setOpened(false)
                    }}>Logout
                    </S.Link>
                </S.MyModal>

                <S.MyGroup position="center">
                    {/* Pinto el elemento MyBurger que viene de la hoja styled */}
                    <S.MyBurger color="white" onClick={() => setOpened(true)}>Open Modal</S.MyBurger>
                </S.MyGroup>
            </>
        );
    }

}



export default connect((state) => ({
    credentials: state.credentials,
    ordersData: state.ordersData
}))(HambModal);










































