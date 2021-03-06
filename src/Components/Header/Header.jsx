
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT, MOVIE_DETAIL } from '../../redux/types';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import { root, API_KEY } from '../../utils';

import HambModal from '../HambModal/HambModal';


//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StHeader';
import MyTooltip from '../Tooltip/Tooltip';
import axios from 'axios';

const Header = (props) => {
    let navigate = useNavigate();
    
    let input = "";
    let movieDetails = [];
    
    //Hooks
    const [searchResults, setsearchResults] = useState([]);

   



    useEffect(() => {
        // console.log("actualizo search results a", searchResults)
        // console.log("actualizo filmsArr a ", filmsArr)
    }, [searchResults])    
    
    useEffect(() => {
        const clearResults = () =>{
            setTimeout(()=>{

                setsearchResults([])
            },1000)
        }
    
        window.addEventListener("mousedown", clearResults);
        return () => {
            window.addEventListener("mousedown", clearResults);
        }
    }, [])

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

    const selectFilm = async (filmId) => {
        let film = filmId;
        let movieData = []
        let movieCast = [];
        console.log("he entrado y esta es film", film)

        try {
            movieData = await axios.get(`https://api.themoviedb.org/3/movie/${film}?api_key=${API_KEY}&language=en-US`)

            movieDetails.push(movieData)


        } catch (error) {
            console.log("Select film error = ", error)
        }

        try {
            let movieCast = await axios.get(`https://api.themoviedb.org/3/movie/${film}/credits?api_key=${API_KEY}&language=en-US`);

            movieDetails.push(movieCast)

        } catch (error) {
            console.log("Get movie cast error = ", error)
        }


        //Guardamos la pelicula escogida en redux
        props.dispatch({ type: MOVIE_DETAIL, payload: movieDetails });


        //Redirigimos a movieDetail con navigate
        navigate("/moviedetail");

        setsearchResults([])
        input = "";
    }

    //Search by title in TMDB endpoint and save result in filmsArr
    const findMovieByTitle = async (e) => {
        input = e.target.value;
        // setsearchInput(e.target.value)

        let result = [];
        if (input != "") {
            try {
                result = await axios.get(`https://videostore-backend.herokuapp.com/films/title?arg=${input}`)

            } catch (error) {
                console.log("Search movie by title error = ", error)
            }

            setsearchResults(result.data.results)
        } else {
            setsearchResults([])
        }

    }

    //Debounce func for findMovieByTitle
    const debouncedFindMovie = debounce(findMovieByTitle, 1000)

    //Conditional rendering of quick search results
    const resultsRender = () => {
        let renderArr = [];

        if (searchResults.length != 0) {
            renderArr = [
                searchResults.map(elmnt => {
                    return (

                        <S.rowResult key={elmnt.id} onClick={() => selectFilm(elmnt.id)}>
                            <span>{elmnt.title}</span>
                        </S.rowResult>
                    )
                })
            ]
            return renderArr

        } else if(searchResults == []) {
            return(
                <span></span>
            )
        }
    }


    return (
        <S.headerContainter>
            <S.mainIcon onClick={() => goTo('/')} src={require('../../assets/logos/istreaming.png')} />
            <S.inputResultsDiv>
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
                <S.divResults>
                    {resultsRender()}
                </S.divResults>
            </S.inputResultsDiv>

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