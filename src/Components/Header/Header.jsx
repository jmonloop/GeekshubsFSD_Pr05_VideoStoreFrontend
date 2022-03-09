
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';


import HambModal from '../HambModal/HambModal';


//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './HeaderSt';
import MyTooltip from '../Tooltip/Tooltip';

const Header = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        console.log(props.credentials);
    })

    const goTo = (place) => {

        setTimeout(() => {
            navigate(place);
        }, 200);

    }

    
    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: LOGOUT });

        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    if (!props.credentials?.token) {
        return (
            <S.headerContainter>
                <S.mainIcon onClick={() => goTo('/')} src={require('../../assets/logos/istreaming.png')} />
                <S.MyInput

                    icon={
                        <MyTooltip />
                    }

                    placeholder="Search movie..."
                    radius="xl"
                    size="md"
                />
                <HambModal />
            </S.headerContainter>
        )
    } else {
        return (
            <div className='designHeader'>
                <div className="headerSpace"></div>
                <div className="headerSpace"></div>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={() => navigate("/profile")}>{props.credentials?.user.nickname}</div>
                    <div className="link" onClick={() => logOut()}>Logout</div>
                </div>
            </div>
        )
    }



}

export default connect((state) => ({
    credentials: state.credentials
}))(Header);










// <div className="headerSpace"></div>
// <div className="headerSpace"></div>
// <div className="headerSpace linksDesign">
//     <div className="link" onClick={()=>goTo("/login")}>Login</div>
//     <div className="link" onClick={()=>goTo("/register")}>Register</div>
// </div>