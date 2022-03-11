//Importo styled-components
import styled from 'styled-components';
//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const movieDetailContainter = styled.div`
    background: rgb(6,126,68);
    background: linear-gradient(180deg, rgba(6,126,68,1) 2%, rgba(5,111,26,1) 28%, rgba(53,106,6,1) 92%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;
`

export const detailsBox = styled.div`

    margin-top: 5%;
    height: 100%;
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: gray;
`

export const detailDiv = styled.div`
    height: 20%;
    width: 80%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const detailKey = styled.div`

`

export const detailValue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const detailContent = styled.p`

`