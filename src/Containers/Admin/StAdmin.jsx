//Importo styled-components
import styled from 'styled-components';
//Importo componente prefabricado 'Burger' de mantine
import { ScrollArea } from '@mantine/core';

export const adminContainer = styled.div`
    background: rgb(6,126,68);
    background: linear-gradient(180deg, rgba(6,126,68,1) 2%, rgba(5,111,26,1) 28%, rgba(53,106,6,1) 92%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* height: 130vh; */
    height: 100%;
    width: 100%;
`
export const adminTitle = styled.div`

`

export const adminBox = styled.div`
    margin-top: 5%;
    height:50em;
    width: 90%;

    border-style: solid;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
    flex-direction: column;
    }

    background-color: gray;
`

export const usersDiv = styled.div`
    height: 80%;
    width: 33%;
    /* background-color: blue; */
    @media (max-width: 768px) {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const sectionTitle = styled.div`
`

export const filmsDiv = styled.div`
    height: 80%;
    width: 33%;
    /* background-color: red; */
    @media (max-width: 768px) {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ordersDiv = styled.div`
    height: 80%;
    width: 33%;
    /* background-color: purple; */
    @media (max-width: 768px) {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const tableDiv= styled.div`

border: 2px solid black;
background-color: white;


`

export const tableData= styled.td`
background-color: gray;
`