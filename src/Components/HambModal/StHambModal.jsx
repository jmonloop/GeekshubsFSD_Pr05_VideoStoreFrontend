//Importo styled-components
import styled from 'styled-components';

import {Burger, Modal, Group } from '@mantine/core';


//Mantine components
export const MyBurger = styled(Burger)`
    /* background-color: white; */
    :hover {
    background-color: rgba(151, 149, 8, 0.698);
    transition: 0.4s;
    transform:scale(1.1);
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

    :hover{
        color: orange;
    }
`