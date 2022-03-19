//Importo styled-components
import styled from 'styled-components';


import {Burger, Modal, Group } from '@mantine/core';


//Mantine components
export const Button = styled.div`
    /* background-color: white; */
    border: solid;
    height: 3em;
    width: 6em;
    padding: 1%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* text-align: center; */

    :hover {
    background-color: rgba(151, 149, 8, 0.698);
    transition: 0.4s;
    transform:scale(1.1);
    cursor: pointer;
}
`

export const MyModal = styled(Modal)`


`
export const MyGroup = styled(Group)`


`




//Own components
export const Link = styled.div`
    font-weight: bold;
    cursor:pointer;
    margin: 5%;
    

    :hover {
    color: rgba(151, 149, 8, 0.698);
    transition: 0.4s;
    transform:scale(1.05);
    }
`