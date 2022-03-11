import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import {root} from '../../utiles';
import PaginationComp from '../../Components/Pagination/Pagination';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StHome.jsx';

let res;
let lastPage;
let actualPage;

const Home = (props) => {
    //vars
    let navigate = useNavigate();

    //hooks
    const [films, setFilms] = useState([]);


    //useEffects
    useEffect(() => {
        //No es correcto realizar el try catch del axios en el useEffect
        //dado que el useEffect es en si un proceso con un callback, meter un proceso
        //asíncrono traería problemas y React no lo permite, por ello, llamamos a una funcion
        //que habremos hecho nosotros y se encargará de ello

        getFilms(0);
        lastPage = 0;
        actualPage = 0;
    }, []);

    useEffect(() => {
        // console.log("vaya, , films ha cambiado, ", films);
    }, [films]);

    useEffect(() => {
        console.log(lastPage, actualPage)

        if(lastPage !== actualPage) {
            getFilms(props.pageNum-1)
            
            lastPage = props.pageNum;
            
        }

    });


    //funcs
    const updatePage = () => {
        actualPage = props.pageNum;
    }
    const getFilms = async (page) => {
        
        try {

            res = await axios.get("https://videostore-backend.herokuapp.com/films/toprated");

            //Una vez han venido los datos del backend, nosotros, lo siguiente que haremos para que no se pierdan
            //será setear esos datos en el hook, haciendo que las peliculas estén disponibles 
            //para los return del componente.
            console.log(res.data[page].results)
            // setTimeout(() => {

                setFilms(res.data[page].results);
                lastPage = actualPage;
                // console.log(setFilms)
            // }, 2000);

        } catch (error) {
            console.log(error);
        }
    };
    const selectFilm = (film) => {

        console.log(film);
        //Guardamos la pelicula escogida en redux
        props.dispatch({ type: MOVIE_DETAIL, payload: film });


        //Redirigimos a movieDetail con navigate
        navigate("/moviedetail");
    }

    if (films[0]?.id !== undefined) {
        return (
            <S.homeContainter>
                <S.roosterTitle>TOP RATED MOVIES</S.roosterTitle>
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
                                <S.filmDiv key={film.id} onClick={() => selectFilm(film)}>
                                    <S.filmImg src={root + film.poster_path} alt={film.title} />
                                </S.filmDiv>
                            )
                        })
                    }

                </S.filmsRooster>

                <PaginationComp total={res.data.length} onClick={updatePage()}></PaginationComp>
                
    



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