import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import { root, API_KEY } from '../../utiles';
import PaginationComp from '../../Components/Pagination/Pagination';


//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StHome.jsx';

let res;
let details;
let lastPage;
let actualPage;

const Home = (props) => {
    //vars
    let navigate = useNavigate();
    let movieDetails = [];

    //hooks
    const [films, setFilms] = useState([]);


    //useEffects
    useEffect(() => {
        //No es correcto realizar el try catch del axios en el useEffect
        //dado que el useEffect es en si un proceso con un callback, meter un proceso
        //asíncrono traería problemas y React no lo permite, por ello, llamamos a una funcion
        //que habremos hecho nosotros y se encargará de ello

        getFilms(1);
        lastPage = 1;
        actualPage = 1;
    }, []);

    useEffect(() => {
        // console.log("vaya, , films ha cambiado, ", films);
    }, [films]);

    useEffect(() => {

        if (lastPage !== actualPage) {
            getFilms(props.pageNum)

            lastPage = props.pageNum;

        }

    });


    //funcs
    const updatePage = () => {
        actualPage = props.pageNum;
    }
    const getFilms = async (page) => {

        try {

            // res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
            res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=${page}`);


            //Save topRated films in Films hook
            setFilms(res.data.results);



        } catch (error) {
            console.log(error);
        }
    };
    const selectFilm = async (filmId) => {
        let film = filmId;
        let movieData = []
        let movieCast = [];

        try {
            movieData = await axios.get(`https://api.themoviedb.org/3/movie/${film}?api_key=${API_KEY}&language=en-US`)

            movieDetails.push(movieData)


        } catch (error) {
            console.log('error')
        }

        try {
            let movieCast = await axios.get(`https://api.themoviedb.org/3/movie/${film}/credits?api_key=${API_KEY}&language=en-US`);

            movieDetails.push(movieCast)
            console.log(movieDetails)

        } catch (error) {
            console.log('error')
        }


        //Guardamos la pelicula escogida en redux
        props.dispatch({ type: MOVIE_DETAIL, payload: movieDetails });


        //Redirigimos a movieDetail con navigate
        navigate("/moviedetail");
    }

    if (films[0]?.id !== undefined) {
        return (
            <S.homeContainter>

                <S.filmsDiv>
                    <S.filmsRooster>

                        {
                            //Voy a mapear las películas
                            films.map(film => {
                                //a cada elemento que voy a mapear
                                //le brindo un KEY (obligatorio) que lo distinguirá de
                                //el resto de elementos
                                return (
                                    //Al mapear, cada elemento que se itera del array (en este caso pelicula es ese elemento),
                                    //si le hacemos propiedad onclick y pasamos el elemento como argumento,
                                    //a esa funcion le va a llegar el objeto que hayamos clickado entero
                                    <S.filmDiv key={film} onClick={() => selectFilm(film.id)}>
                                        <S.filmImg src={root + film.poster_path} alt={film.title} />
                                    </S.filmDiv>
                                )
                            })
                        }

                    </S.filmsRooster>
                </S.filmsDiv>

                <PaginationComp total={res.data.total_pages} onClick={updatePage()}></PaginationComp>





            </S.homeContainter>

        )
    } else {
        return (
            <S.homeContainter>
                {/* <div className="marginLoader">
                    <img src={require('../../img/loader.gif')} alt="cargador" />
                </div> */}
            </S.homeContainter>
        )
    }

}


export default connect((state) => ({
    pageNum: state.pageNum
}))(Home);