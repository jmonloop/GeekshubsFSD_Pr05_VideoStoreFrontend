//Importo styled-components
import styled from 'styled-components';

import { Input } from '@mantine/core';

//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const headerContainter = styled.div`

    height: 20vh;

    background-color: rgb(0, 0, 0);

    color: white;

    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-around; */
    justify-content: space-between;
    /* justify-content: space-evenly; */
    padding-right: 5%;
    padding-left: 5%;
`


export const searchBar = styled.input`
    height: 5%;
    width: 20%;

    background-color: white ;
    border-radius: 50%;
`



//Declaro un nuevo elemento del tipo "IMG" llamado mainIcon
export const mainIcon = styled.img`
    max-height: 100%;
    max-width: 100%;
    cursor: pointer;
`

export const MyInput = styled(Input)`
    margin-right: 9%;
`