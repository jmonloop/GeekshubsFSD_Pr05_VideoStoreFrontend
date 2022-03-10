//Importo styled-components
import styled from 'styled-components';

import {Burger, Modal, Group } from '@mantine/core';


//Genero elemento MyBurger que será lo que yo escribiré en React cuando quiera meter el elemento. se iguala a styled(tipoElemento). Si fuese un div tipoElemento sería un div
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