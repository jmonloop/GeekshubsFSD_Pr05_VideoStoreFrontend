
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';



import { useState } from 'react';



import ModPassForm from '../ModPassForm/ModPassForm';


//Importo todo lo que venga de ModUserModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from '../ModPassModal/StModPassModal'


const ModPassModal = (props) => {
    //variables
    let navigate = useNavigate();

    //Mantine hooks
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    //useEffects
    useEffect(() => {

    }, [])

    //funcs
    const GoTo = (place) => {
        navigate(place)
    }


    //renders
    return (
        <>
            <S.MyModal
                opened={opened}
                onClose={() => setOpened(false)}
            // title="Sign Up"
            >
                <ModPassForm></ModPassForm>
            </S.MyModal>

            <S.MyGroup position="center">
                {/* Pinto el elemento MyBurger que viene de la hoja styled */}
                <S.Button color="white" onClick={() => setOpened(true)}><div>Change Password</div></S.Button>
            </S.MyGroup>
        </>
    );
}






export default connect((state) => ({
    credentials: state.credentials
}))(ModPassModal);










































