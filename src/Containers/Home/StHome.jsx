//Importo styled-components
import styled from 'styled-components';
//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const homeContainter = styled.div`
    background: rgb(6,126,68);
    background: linear-gradient(180deg, rgba(6,126,68,1) 2%, rgba(5,111,26,1) 28%, rgba(53,106,6,1) 92%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const roosterTitle = styled.div`
    height: 10%;
    width: 50%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 8vh;
    margin-top: 3%;
    margin-bottom: 3%;
`

export const filmsRooster = styled.div`
    display: flex;
    flex-wrap: wrap;

    > * {
        flex-basis: 25%;
    }

    margin-bottom: 2%;
`

export const filmDiv = styled.div`
 /* :hover{
     cursor: pointer;
 } */
`

export const filmImg = styled.img`
 :hover{
     cursor: pointer;
 }
`