import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import { root, API_KEY } from '../../utils';
import PaginationComp from '../../Components/Pagination/Pagination';
import { Table } from '@mantine/core';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StMovieDetail.jsx';

let res;

const MovieDetail = (props) => {
    //vars
    let navigate = useNavigate();
    let crewResults = props.search[1].data.crew;
    let castResults = props.search[1].data.cast;

    //hooks
    const [genres, setGenres] = useState([props.search[0].data.genres]);

    //useEffects
    useEffect(() => {

    }, []);

    useEffect(() => {
    }, []);

    useEffect(() => {

    });

    //FUNCS
    //Convert from genre id to genre name
    const genresTMDB = (genre) => {
        switch (genre) {
            case 28:
                return "Action";

            case 12:
                return "Adventure";

            case 16:
                return "Adventure";

            case 35:
                return "Comedy";

            case 80:
                return "Crime";

            case 99:
                return "Documentary"

            case 18:
                return "Drama";

            case 10751:
                return "Family";

            case 14:
                return "Fantasy";

            case 36:
                return "History";

            case 27:
                return "Horror";

            case 10402:
                return "Music";

            case 9648:
                return "Mysery";

            case 10749:
                return "Romance";

            case 878:
                return "Science Fiction";

            case 10770:
                return "TV Movie";

            case 53:
                return "Thriller";

            case 10752:
                return "War";

            case 37:
                return "Western"

            default:
                break

        }
    }
    //Find director name
    const findDirector = () => {
        for (let i = 0; i < crewResults.length; i++) {
            if (crewResults[i].known_for_department === "Directing") {
                return crewResults[i].name
            }
        }
    }

    //Register Film when click OrderMovie
    const registerMovie = async () => {

        let results;

        let body = {
            id: props.search[0].data.id,
            title: props.search[0].data.title,
        }
        try{
            results = await axios.post(`https://videostore-backend.herokuapp.com/films`, body)

            console.log(results)
        }catch(error){
            console.log(error)
        }
    }

    //Render bottom orders options
    const renderOrder = () => {
        //If no credentials, ask for login
        if (!props.credentials?.token) {
            return (<span>Log in to order this movie</span>)
        } else {
            //If no orders, ask for order
            if (props.ordersData == "There are no fields with the searched term") {
                return (<S.orderButton onClick={()=>registerMovie()}>Order Movie</S.orderButton>)
            } else {
                //if orders, look for movie
                for (let i = 0; i < props.ordersData.length; i++) {
                    if (props.ordersData[i].filmTitle === props.search[0].original_title) {
                        //if movie, say it's already booked
                        return (<span>You already have this movie</span>)
                    } else {
                        //if not, ask for order
                        return (<S.orderButton onClick={()=>registerMovie()}>Order Movie</S.orderButton>)
                    }
                }
            }
        }
    }

    return (
        <S.movieDetailContainer>
            <S.detailsBox>
                <S.detailsPosterDiv>
                    <S.detailsCol>
                        <Table>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <S.detailValue>
                                            {props.search[0].data.title}
                                        </S.detailValue>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Genres</td>
                                    <td>
                                        <S.detailValue>
                                            {genres[0].map(genre => {
                                                return (<span key={genre.id} >{genre.name}</span>)
                                            })}
                                        </S.detailValue>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Directed By</td>
                                    <td>
                                        <S.detailValue>
                                            {findDirector()}
                                        </S.detailValue>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cast</td>
                                    <td>
                                        <S.detailValue>
                                            {castResults[0].name}, {castResults[1].name}, {castResults[2].name}, {castResults[3].name}, {castResults[4].name}, {castResults[5].name}
                                        </S.detailValue>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Original Language</td>
                                    <td>
                                        <S.detailValue>
                                            {props.search[0].data.original_language}
                                        </S.detailValue>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Release Date</td>
                                    <td>
                                        <S.detailValue>
                                            {props.search[0].data.release_date}
                                        </S.detailValue>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Score</td>
                                    <td>
                                        <S.detailValue>
                                            {props.search[0].data.vote_average}
                                        </S.detailValue>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </S.detailsCol>
                    <S.posterCol>
                        <S.posterImg src={root + props.search[0].data.poster_path} alt="" />
                    </S.posterCol>
                </S.detailsPosterDiv>
                <S.synopsisRow>{props.search[0].data.overview}</S.synopsisRow>
                <S.orderRow>{renderOrder()}</S.orderRow>
            </S.detailsBox>
        </S.movieDetailContainer >
    )
}


export default connect((state) => ({
    credentials: state.credentials,
    search: state.search,
    ordersData: state.ordersData
}))(MovieDetail);