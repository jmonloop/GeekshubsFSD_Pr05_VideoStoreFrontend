
import React, { useState } from 'react';

import { Tooltip } from '@mantine/core';
import styled from 'styled-components';

const SearchIcon = styled.img`
    height: 1.5em;
`

const MyTooltip = (props) => {
    //Aquí irán las funciones propias de Mantine
    // Ejemplo: const [opened, setOpened] = useState(false);
    const [opened, setOpened] = useState(true);

    return (
        <Tooltip

            label="Advanced search.."
            color="orange"
            position="left"
            withArrow
            opened={opened}
        >
            <SearchIcon
                onMouseEnter={() => setOpened(true)}
                onMouseLeave={() => setOpened(false)}
                src={require('../../assets/icons/search.png')} />
        </Tooltip>
    )
}
export default MyTooltip;