
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import HambModal from '../HambModal/HambModal';


//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StHeader';
import MyTooltip from '../Tooltip/Tooltip';
import axios from 'axios';

const Header = (props) => {

    let navigate = useNavigate();
    let filmsArr = [];

    //Hooks
    const [searchResults, setsearchResults] = useState([]);



    useEffect(() => {
        console.log("actualizo search results a", searchResults)
        console.log("actualizo filmsArr a ", filmsArr)
    }, [searchResults])

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

    //Search by title in TMDB endpoint and save result in filmsArr
    const findMovieByTitle = async (e) => {
        let input = e.target.value;
        // setsearchInput(e.target.value)

        let result = [];
        console.log("soy input", input)
        try {
            result = await axios.get(`https://videostore-backend.herokuapp.com/films/title?arg=${input}`)

        } catch (error) {
            console.log("Search movie by title error = ", error)
        }
        filmsArr = result.data.results;
        
        setsearchResults(result.data.results)
    }

    //Debounce func for findMovieByTitle
    const debouncedFindMovie = debounce(findMovieByTitle, 1500)




    return (
        <S.headerContainter>
            <S.mainIcon onClick={() => goTo('/')} src={require('../../assets/logos/istreaming.png')} />
            <S.MyInput
                onChange={(e) => debouncedFindMovie(e)}
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