import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import { root, API_KEY } from '../../utiles';
import PaginationComp from '../../Components/Pagination/Pagination';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StMovieDetail.jsx';

let res;




const MovieDetail = (props) => {
    //vars
    let navigate = useNavigate();
    //hooks
    const [genres, setGenres] = useState([props.search.data.genres]);
    console.log(genres)


    //useEffects
    useEffect(() => {
        // console.log(props.search)
    }, []);

    useEffect(() => {
    }, []);

    useEffect(() => {

    });

    //funcs
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


    return (
        <S.movieDetailContainter>
            <S.detailsBox>
                <S.detailsCol>
                    <S.detailRow>
                        <S.detailDiv>
                            <S.detailKey>Title</S.detailKey>
                        </S.detailDiv>
                        <S.detailDiv>
                            <S.detailValue>{props.search.data.title}</S.detailValue>
                        </S.detailDiv>
                    </S.detailRow>
                    <S.detailRow>
                        <S.detailDiv>
                            <S.detailKey>Genres</S.detailKey>
                        </S.detailDiv>
                        <S.detailDiv>
                            <S.detailValue>
                                {genres[0].map(genre => {
                                    return (<span key={genre.id} >{genre.name}</span>)
                                })}
                            </S.detailValue>
                        </S.detailDiv>
                    </S.detailRow>
                    <S.detailRow>
                        <S.detailDiv>
                            <S.detailKey>Original Language</S.detailKey>
                        </S.detailDiv>
                        <S.detailDiv>
                            <S.detailValue>{props.search.data.original_language}</S.detailValue>
                        </S.detailDiv>
                    </S.detailRow>
                    <S.detailRow>
                        <S.detailDiv>
                            <S.detailKey>Relase Date</S.detailKey>
                        </S.detailDiv>
                        <S.detailDiv>
                            <S.detailValue>{props.search.data.release_date}</S.detailValue>
                        </S.detailDiv>
                    </S.detailRow>
                    <S.detailRow>
                        <S.detailDiv>
                            <S.detailKey>Score</S.detailKey>
                        </S.detailDiv>
                        <S.detailDiv>
                            <S.detailValue>{props.search.data.vote_average}</S.detailValue>
                        </S.detailDiv>
                    </S.detailRow>
                    <S.detailRowSynopsis>
                        <S.detailDiv>
                            <S.detailKey>Synopsis</S.detailKey>
                        </S.detailDiv>
                        <S.detailDiv>
                            <S.detailValue>{props.search.data.overview}</S.detailValue>
                        </S.detailDiv>
                    </S.detailRowSynopsis>
                </S.detailsCol>

                <S.posterCol>
                    <S.detailPoster>
                        <S.posterImg src={root + props.search.data.poster_path} alt="" />
                    </S.detailPoster>
                </S.posterCol>
            </S.detailsBox>
        </S.movieDetailContainter>
    )
}


export default connect((state) => ({
    search: state.search
}))(MovieDetail);









{/* <S.detailsBox>
                <S.detailDiv>
                    <S.detailKey>Original Title</S.detailKey>
                    <S.detailValue>{props.search.original_title}</S.detailValue>
                </S.detailDiv>
                <S.detailDiv>
                    <S.detailKey>Genres</S.detailKey>

                    <S.detailValue>
                        {genres[0].map(genre => {
                            return (<span>{genresTMDB(genre)}</span>)
                        })}
                    </S.detailValue>

                </S.detailDiv>

            </S.detailsBox> */}