//Importo styled-components
import styled from 'styled-components';
//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const MovieDetailContainter = styled.div`
    background: rgb(6,126,68);
    background: linear-gradient(180deg, rgba(6,126,68,1) 2%, rgba(5,111,26,1) 28%, rgba(53,106,6,1) 92%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;
`

export const MovieDetailTitle = styled.div`
    height: 10%;
    width: 50%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 8vh;
    margin-top: 3%;
    margin-bottom: 3%;
`

export const DetailsBox = styled.div`
    height: 100%;
    width: 80%;

    background-color: gray;
`