
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';


import { useState } from 'react';


import { Modal, Group } from '@mantine/core';
import RegisterForm from '../RegisterForm/RegisterForm';

//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './HambModalSt';


const HambModal = (props) => {

    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
            <>
        <Modal 
            opened={opened}
            onClose={() => setOpened(false)}
            title="Sign Up"
        >
            <RegisterForm/>
        </Modal>

        <Group position="center">
            {/* Pinto el elemento MyBurger que viene de la hoja styled */}
            <S.MyBurger color="white" onClick={() => setOpened(true)}>Open Modal</S.MyBurger>
        </Group>
            </>
      );

}



export default connect((state)=>({
    credentials: state.credentials
}))(HambModal);













































