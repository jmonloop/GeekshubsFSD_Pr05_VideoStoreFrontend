//Importo styled-components
import styled from 'styled-components';
//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const loginContainter = styled.div`
    background: rgb(6,126,68);
    background: linear-gradient(180deg, rgba(6,126,68,1) 2%, rgba(5,111,26,1) 28%, rgba(53,106,6,1) 92%);
    
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const loginButton = styled.div`
    width: 9em;
    height: 3em;

    color: white;

    transition: 0.3s;
    background-color: green;

    display: flex;
    align-items: center;
    justify-content: center;

    /* margin-top: 2em; */

    cursor: pointer;
`