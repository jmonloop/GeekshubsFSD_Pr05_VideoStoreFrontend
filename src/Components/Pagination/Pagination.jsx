import { Pagination } from '@mantine/core';
import { useState, useEffect } from 'react';

//REDUX...
import { connect } from 'react-redux';
import { PAGINATION } from '../../redux/types';


const PaginationComp = (props) => {
    const [activePage, setPage] = useState(1);

    //useEffects
    useEffect(() => {
        props.dispatch({ type: PAGINATION, payload: activePage });
    });


    return <Pagination page={activePage} onChange={setPage} total={props.total} color="yellow" />;
}

export default connect()(PaginationComp);