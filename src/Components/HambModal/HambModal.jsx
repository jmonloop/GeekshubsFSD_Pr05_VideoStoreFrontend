
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import {connect} from 'react-redux';

import './HambModal.css';


import { useState } from 'react';
import { Modal, Burger, Group } from '@mantine/core';
import RegisterForm from '../RegisterForm/RegisterForm';



const HambModal = (props) => {

    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
            <>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Introduce yourself!"
        >
            {/* <RegisterForm /> */}
        </Modal>

        <Group position="center">
            <Burger color="#ffffff" onClick={() => setOpened(true)}>Open Modal</Burger>
        </Group>
            </>
      );

}




export default connect((state)=>({
    credentials: state.credentials
}))(HambModal);