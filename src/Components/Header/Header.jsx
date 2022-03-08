
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';

import './Header.css';

const Header = (props) => {

    let navigate = useNavigate();

    useEffect(()=>{
        console.log(props.credentials);
    })

    const goTo = (place) => {

        setTimeout(()=> {
            navigate(place);
        }, 200);

    }

    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({type:LOGOUT});

        setTimeout(()=>{
            navigate("/");
        },1500);
    }

    if(!props.credentials?.token){
        return (
            <div className='designHeader'>
                <div className="headerSpace"></div>
                <div className="headerSpace"></div>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={()=>goTo("/login")}>Login</div>
                    <div className="link" onClick={()=>goTo("/register")}>Register</div>    
                </div>
            </div>
        )
    }else {
        return (
            <div className='designHeader'>
                <div className="headerSpace"></div>
                <div className="headerSpace"></div>
                <div className="headerSpace linksDesign">
                    <div className="link" onClick={()=>navigate("/profile")}>{props.credentials?.user.nickname}</div>
                    <div className="link" onClick={()=>logOut()}>Logout</div>    
                </div>
            </div>
        )
    }

    

}

export default connect((state)=>({
    credentials: state.credentials
}))(Header);