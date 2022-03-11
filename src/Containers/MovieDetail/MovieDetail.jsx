import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import { root } from '../../utiles';
import PaginationComp from '../../Components/Pagination/Pagination';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StMovieDetail.jsx';

let res;

const MovieDetail = (props) => {
    //vars
    let navigate = useNavigate();
    //hooks



    //useEffects
    useEffect(() => {
        // console.log(props.search)
    }, []);
    
    useEffect(() => {
    }, []);
    
    useEffect(() => {
        
    });


    return (
        <S.MovieDetailContainter>
            <S.MovieDetailTitle>{props.search.original_title}</S.MovieDetailTitle>
            <S.DetailsBox></S.DetailsBox>




        </S.MovieDetailContainter>
    )
}


// export default MovieDetail;

export default connect((state) => ({
    search: state.search
}))(MovieDetail);