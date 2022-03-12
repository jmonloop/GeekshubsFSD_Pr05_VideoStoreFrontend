import styled from 'styled-components';
//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const movieDetailContainer = styled.div`
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

export const detailsBox = styled.div`
    margin-top: 5%;
    height: auto;
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: gray;
`

export const detailsPosterDiv = styled.div `
    height: 60%;
    width: 80%;

    margin-top: 5%;
    margin-bottom: 5%;

    /* border-style: solid; */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

export const detailsCol = styled.div`
    height: 100%;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    /* background-color: blue; */
`
export const posterCol = styled.div`
    height: 100%;
    width: 50%;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* background-color: pink; */
`
export const synopsisRow = styled.div`
    height: 40%;
    width: 80%;

    margin-bottom: 5%;
    /* padding-top: 1%;
    padding: 1%;
    padding-bottom: 1%;
    padding-bottom: 1%; */

    /* border-style: solid; */

    display: flex;
    flex-direction: column;
    text-align: justify;

    justify-content: flex-start;
    align-items: flex-start;

`


export const detailRow = styled.div`
    height: 20%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`




export const detailDiv = styled.div`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
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

export const detailPoster = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const posterImg = styled.img`
    margin-top: 5%;
    max-height: 100%;
    max-width: 100%;
`