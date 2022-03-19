
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';
import axios from 'axios';



import { useState } from 'react';



import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StHambModal.jsx';
import { useAuth } from '../../contexts/AuthContext';


const HambModal = (props) => {
    //variables
    let navigate = useNavigate();


    //hooks
    const [RenderLoginForm, setRenderLoginForm] = useState(false)
    const [RenderRegisterForm, setRenderRegisterForm] = useState(false)
    //Mantine hooks
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    //Firestone auth hooks
   const {logout} = useAuth();

    //useEffects
    useEffect(() => {

    }, [])

    //funcs
    const GoTo = (place) => {
        navigate(place)
    }


    const LogoutDB = () => {
        setRenderLoginForm(false)

        //Borrar de RDX las credenciales
        setTimeout(() => {
            props.dispatch({ type: LOGOUT });
        }, 500)
    }

    //If logged user is admin, his link navigates to admin view
    const renderProfileLinks = () => {
        if(props.credentials?.user.rol == "admin"){
            return(<S.Link onClick={() => {GoTo('/admin');setOpened(false);}}>{props.credentials?.user.nickname}</S.Link>)
        } else {
            return(<S.Link onClick={() => {GoTo('/profile');setOpened(false);}}>{props.credentials?.user.nickname}</S.Link>)
        }
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
                    {renderProfileLinks()}
                    <S.Link onClick={() => {
                        LogoutDB();
                        logout();
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
    credentials: state.credentials
}))(HambModal);










































