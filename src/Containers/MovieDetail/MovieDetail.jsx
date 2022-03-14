import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL, USER_ORDERS} from '../../redux/types';
import { root, API_KEY } from '../../utils';
import PaginationComp from '../../Components/Pagination/Pagination';
import { getOrders } from '../../Components/HambModal/HambModal'
import { Table } from '@mantine/core';
import moment from 'moment'

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
    const [userHasMovie, setuserHasMovie] = useState(false)

    //useEffects
    useEffect(() => {
        userOwnsMovie(props.credentials.user.id, props.search[0].data.id)

    }, []);

    useEffect(() => {
    }, []);

    useEffect(() => {

    });

    //FUNCS

    //Find director name for printing it
    const findDirector = () => {
        for (let i = 0; i < crewResults.length; i++) {
            if (crewResults[i].known_for_department === "Directing") {
                return crewResults[i].name
            }
        }
    }

    //Register Film when click Order Movie
    const registerMovie = async () => {

        let results;

        let body = {
            id: props.search[0].data.id,
            title: props.search[0].data.title,
        }
        try {
            results = await axios.post(`https://videostore-backend.herokuapp.com/films`, body)

        } catch (error) {
            console.log("Register new movie error = ", error)
        }
    }


    const makeOrder = async () => {
        let results;
        let currentDate = moment().format('YYYY/MM/DD');
        let returnDate = moment().add(15, 'days').format('YYYY/MM/DD')

        let body = {
            filmId: props.search[0].data.id,
            userId: props.credentials.user.id,
            price: 3,
            outDate: currentDate,
            returnDate: returnDate
        }
        console.log("body", body)

        try {
            results = await axios.post(`https://videostore-backend.herokuapp.com/orders`, body)
        } catch (error) {
            console.log('Create order error = ', error)
        }


        let ordersArr = [];
        try {
            ordersArr = await axios.get(`https://videostore-backend.herokuapp.com/orders/${props.credentials.user.id}`)

        } catch (error) {
            console.log("Refresh orders error = ", error)
        }

        console.log("Orders Data = " ,ordersArr.data)

    }

    //Check if user already has the actual movie
    const userOwnsMovie = async (userId, movieId) => {
        let result = await axios.get(`https://videostore-backend.herokuapp.com/orders/user?user=${userId}&film=${movieId}`)

        console.log("result", result)

        if(result.data.length == 0) {
            setuserHasMovie(false)
        } else {
            setuserHasMovie(true)
        }

        console.log(userHasMovie)
    }

    //Conditional render of the bottom order options
    const renderOrdersView = () => {
        //Si el user está logueado
        if(props.credentials.token) {
            //Y tiene ya la película..
            if(userHasMovie) {
                //Indica que ya la tiene
                return (<span>You arleady have this movie</span>)
                //Si no la tiene...
            } else {
                //Muestra botón para pedirla
                return (<span>Make order</span>)
            }

        } else {
            return (<span>Login for make an order</span>)
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
                <S.orderRow>{renderOrdersView()}</S.orderRow>
            </S.detailsBox>
        </S.movieDetailContainer >
    )
}


export default connect((state) => ({
    credentials: state.credentials,
    search: state.search
}))(MovieDetail);