import styled from 'styled-components';
//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const chartContainer = styled.div`
    background: rgb(6,126,68);
    background: linear-gradient(180deg, rgba(6,126,68,1) 2%, rgba(5,111,26,1) 28%, rgba(53,106,6,1) 92%);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100vh;
    height: 100%;
    width: 100%;
`

export const chartBox = styled.div`
    margin-top: 5%;
    height:50em;
    width: 90%;

    border-style: solid;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: gray;
`
export const sectionTitle = styled.div`
`

export const contentDiv = styled.div`
    height: 80%;
    width: 33%;
    /* background-color: blue; */
    @media (max-width: 768px) {
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const tableDiv= styled.div`

border: 2px solid black;
background-color: white;



`