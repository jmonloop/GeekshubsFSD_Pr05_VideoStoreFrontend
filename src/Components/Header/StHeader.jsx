//Importo styled-components
import styled from 'styled-components';

import { Input } from '@mantine/core';

//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const headerContainter = styled.div`

    height: 20vh;
    /* width: 100vw; */

    @media (max-width: 768px) {
    height: 10vh;
  }

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





//Declaro un nuevo elemento del tipo "IMG" llamado mainIcon
export const mainIcon = styled.img`
    max-height: 100%;
    max-width: 100%;
    cursor: pointer;
`

export const inputResultsDiv = styled.div`
    height: 100%;
    width: 25em;

    /* background-color: blue; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center

`

export const MyInput = styled(Input)`
    margin-right: 9%;
`

export const divResults = styled.div`
    position: absolute;
    top: 70%;
    height: auto;
    width: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const rowResult = styled.div`
    color: black;
    :hover{
        background-color: orange;
        cursor: pointer;
    }
`