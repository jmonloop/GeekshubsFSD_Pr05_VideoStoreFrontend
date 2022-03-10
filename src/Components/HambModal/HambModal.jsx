
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';



import { useState } from 'react';



import RegisterForm from '../RegisterForm/RegisterForm';
// import Link from '../Link/Link';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StHambModal.jsx';


const HambModal = (props) => {
    //own variables
    let navigate = useNavigate();

    //own hooks
    const [RenderLoginForm, setRenderLoginForm] = useState(false)
    const [RenderRegisterForm, setRenderRegisterForm] = useState(false)




    //Own funcs
    const GoTo = (place) => {
        navigate(place)
    }


    const Logout = () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: LOGOUT });
        setRenderLoginForm(false)
    }

    //Mantine hooks
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';



    if ((!props.credentials?.token)) {
        return (
            <>
                <S.MyModal
                    RenderRegisterForm={RenderRegisterForm}
                    opened={opened}
                    onClose={() => {
                        setOpened(false);
                        //Delay forms render for not to close while is rendering back
                        setTimeout(() => {
                            setRenderLoginForm(false);
                            setRenderRegisterForm(false)
                        }, 500)

                    }}
                // title="Sign Up"
                >
                    {/* <>{RenderLoginForm && <LoginForm/> : null}</> */}
                    <>{RenderRegisterForm
                        ? <RegisterForm />
                        : [<S.Link onClick={() => { setRenderLoginForm(true) }}>Login</S.Link>,
                        <S.Link onClick={() => { setRenderRegisterForm(true) }}>Register</S.Link>
                        ]

                    }</>


                    {/* <S.Link onClick={() => { setRenderLoginForm(true) }}>Login</S.Link>
                     */}
                </S.MyModal>

                <S.MyGroup position="center">
                    {/* Pinto el elemento MyBurger que viene de la hoja styled */}
                    <S.MyBurger color="white" onClick={() => setOpened(true)}>Open Modal</S.MyBurger>
                </S.MyGroup>
            </>
        );
    } else {
        return (
            <>
                <S.MyModal
                    opened={opened}
                    onClose={() => setOpened(false)}
                // title="Sign Up"
                >

                    <S.Link onClick={() => { GoTo('/profile'); setOpened(false) }}>{props.credentials?.usuario.nombre}</S.Link>
                    <S.Link onClick={() => { Logout(); setOpened(false) }}>Logout</S.Link>
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













































