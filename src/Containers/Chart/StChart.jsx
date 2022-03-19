import styled from 'styled-components';
//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const chartContainer = styled.div`
    background: rgb(6,126,68);
    background: linear-gradient(180deg, rgba(6,126,68,1) 2%, rgba(5,111,26,1) 28%, rgba(53,106,6,1) 92%);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 120vh;
    /* height: 100%; */
    width: 100%;
`

export const chartBox = styled.div`
    margin-top: 5%;
    height: auto;
    overflow: auto;
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: gray;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
`
export const sectionTitle = styled.div`
margin-top: 3%;
font-size: 3vw;

color: black;
border-bottom: 3px dotted #000000;

margin-bottom: 5%;

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
    justify-content: flex-start;
    align-items: center;
`

export const tableDiv= styled.div`

border: 2px solid black;
background-color: white;

display: flex;
flex-direction: column;



`