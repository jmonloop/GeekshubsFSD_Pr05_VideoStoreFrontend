import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import { root, API_KEY } from '../../utils';
import '../AdvSearch/AdvSearch.css'
import { TextInput, Select, Checkbox } from '@mantine/core';
import * as S from './StAdvSearch';

const AdvSearch = (props) => {



    const [searchData, setsearchData] = useState({
        language: "",
        region: "",
        sort: "",
        adult: ""
    });


    const fillForm = (e) => {
        //Set data
        setsearchData({ ...searchData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <S.searchContainer>
            <>{< pre > {JSON.stringify(searchData, null, 2)}</pre >}</>
                <S.searchBox>
                    <S.contentDiv>
                        <S.sectionTitle>ADVANCED SEARCH</S.sectionTitle>
                        <TextInput
                            label="Language"
                            placeholder=""
                            onChange={(e) => { fillForm(e) }}
                            name="language"
                        />
                        <TextInput
                            label="Region"
                            placeholder=""
                            onChange={(e) => { fillForm(e) }}
                            name="region"
                        />
                        <Select
                            label="Sort By.."
                            placeholder="Pick one"
                            data={[
                                { value: 'popularity.asc', label: 'Popularity (asc)' },
                                { value: 'popularity.desc', label: 'Popularity (desc)' },
                                { value: 'release_date.asc', label: 'Release Date (asc)' },
                                { value: 'release_date.desc', label: 'Release Date (desc)' },
                                { value: 'vote_average', label: 'Vote Average' }
                            ]}
                            name="sort"
                            // onClick={() => { setsearchData.sort(data) }}
                        />
                        <Checkbox
                            label="Include Adult Movies"
                            onChange={(e) => { fillForm(e) }}
                            name="adult"
                        />
                    </S.contentDiv>
                </S.searchBox>
            </S.searchContainer>
        </>

    )

}

export default AdvSearch;