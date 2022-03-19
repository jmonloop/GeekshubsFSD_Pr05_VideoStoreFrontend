import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { root, API_KEY } from '../../utils';
import PaginationComp from '../../Components/Pagination/Pagination';
import { Table } from '@mantine/core';
import { ScrollArea } from '@mantine/core';
import { MOVIE_DETAIL, ADD_TO_CHART, REMOVE_FROM_CHART, CLEAR_CHART } from '../../redux/types'
import moment from 'moment'
import '../Chart/Chart.css'


//Importo todo lo que venga de HambModalSt. Lo llamaré S y lo que venga detrás del punto será el elemento creado en el styled
import * as S from './StChart.jsx';
import * as SS from '../../Components/ModUserModal/StModUserModal';
import ModUserModal from '../../Components/ModUserModal/ModUserModal';
import ModPassModal from '../../Components/ModPassModal/ModPassModal';
import AdminForm from '../../Components/AdminForm/AdminForm'

let res;

const Chart = (props) => {
    //vars
    let navigate = useNavigate();

    //hooks
    const [chartArr, setchartArr] = useState([])
    const [ordersArr, setordersArr] = useState([])
    const [ordersChanged, setordersChanged] = useState(false)
    const [msg, setMsg] = useState("");


    //Mantine hooks
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    //useEffects
    useEffect(() => {

    }, []);

    useEffect(() => {
    }, []);

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    }, []);

    const orderToBack = async (filmId) => {
        let results;
        let currentDate = moment().format('YYYY/MM/DD');
        let returnDate = moment().add(15, 'days').format('YYYY/MM/DD')

        let body = {
            filmId: filmId,
            userId: props.credentials.user.id,
            price: 3,
            outDate: currentDate,
            returnDate: returnDate
        }

        try {
            results = await axios.post(`https://videostore-backend.herokuapp.com/orders`, body)
            setordersChanged(true)
            // console.log("1 ORDER HECHA CON: ", body)
        } catch (error) {
            console.log('Create order error = ', error)
        }

        setordersChanged(false);

    }

    const makeOrders = () =>{
        for(let i=0 ; i<props.chart.chart.length ; i++){
            orderToBack(props.chart.chart[i].id)
        }
        setMsg(`${props.chart.chart.length} orders have been confirmed succesfully!`)

        props.dispatch({ type: CLEAR_CHART });
    }

    const usersThs = (
        <tr>
            <th>MOVIES</th>
        </tr>
    )

    const removeFromChart = (id) => {
        console.log("id que entra", id)
        props.dispatch({ type: REMOVE_FROM_CHART, payload: id });
    }


    const usersRows = props.chart.chart.map((elmnt) => {

        return (

            <tr className='row' key={elmnt.id}>
                <td>{elmnt.title}</td>
                <td onClick={() => { removeFromChart(elmnt.id); }}>Remove from chart</td>
            </tr>
        )
    })





    return (
        <S.chartContainer>
            <S.chartBox>
                <S.contentDiv>
                    <S.sectionTitle>CHART</S.sectionTitle>
                    <S.tableDiv style={{ width: 600 }}>
                        <Table striped highlightOnHover>
                            <caption></caption>
                            <thead>{usersThs}</thead>
                            <tbody>{usersRows}</tbody>
                        </Table>
                        <div className='confirmBttn' onClick={()=>makeOrders()}>CONFIRM ORDER</div>
                        <span>{msg}</span>
                    </S.tableDiv>
                </S.contentDiv>
                
            </S.chartBox>

        </S.chartContainer >
    )
}


export default connect((state) => ({
    credentials: state.credentials,
    ordersData: state.ordersData,
    chart: state.chart
}))(Chart);