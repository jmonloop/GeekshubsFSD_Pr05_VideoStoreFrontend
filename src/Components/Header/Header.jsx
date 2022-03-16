
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';


import HambModal from '../HambModal/HambModal';


//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StHeader';
import MyTooltip from '../Tooltip/Tooltip';

const Header = (props) => {

    let navigate = useNavigate();

    //Hooks
    const [searchInput, setsearchInput] = useState("");



    useEffect(() => {
        console.log("actualizo search input a", searchInput)
    },[searchInput])

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


    const quickSearch = (e) =>{
        setsearchInput(e.target.value)
    }

    return (
        <S.headerContainter>
            <S.mainIcon onClick={() => goTo('/')} src={require('../../assets/logos/istreaming.png')} />
            <S.MyInput
                onChange={(e)=>quickSearch(e)}
                icon={
                    <MyTooltip />
                }

                placeholder="Search movie..."
                radius="xl"
                size="md"
                name="input"
            />
            <HambModal />
        </S.headerContainter>
    )




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