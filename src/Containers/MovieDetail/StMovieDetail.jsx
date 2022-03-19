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
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
`

export const detailsPosterDiv = styled.div`
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

export const title = styled.div`

margin-top: 3%;
font-size: 3vw;

color: black;

`

export const detailsCol = styled.div`
    height: 100%;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    border: 2px dotted #000000;
border-radius: 0px 37px 0px 40px;

padding: 3%;
   
`
export const posterCol = styled.div`
    height: 100%;
    width: 50%;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

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

    border: 2px dotted #000000;
border-radius: 0px 37px 0px 40px;

padding: 3%;

`

export const orderRow = styled.div`
    height: 40%;
    width: 80%;

    margin-bottom: 5%;
    /* padding-top: 1%;
    padding: 1%;
    padding-bottom: 1%;
    padding-bottom: 1%; */

    /* border-style: solid; */

    display: flex;
    flex-direction: row;
    text-align: justify;

    justify-content: space-around;
    align-items: center;

`

export const addButton = styled.div`
    height: 5%;
    width: 15%;

    background: rgb(6,126,68);
    background: linear-gradient(180deg, rgba(6,126,68,1) 2%, rgba(5,111,26,1) 28%, rgba(53,106,6,1) 92%);

    text-align: center;

    padding: 2%;

    font-size: 1rem;

    :hover{
        cursor: pointer;
        transition: 0.2s;
        transform:scale(1.05);
    }
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
`

export const removeButton = styled.div`
    height: 5%;
    width: 15%;

    background: rgb(158,127,14);
background: linear-gradient(0deg, rgba(158,127,14,1) 8%, rgba(106,83,6,1) 30%, rgba(126,15,6,1) 62%);

    text-align: center;

    padding: 2%;

    font-size: 1rem;

    :hover{
        cursor: pointer;
        transition: 0.2s;
        transform:scale(1.05);
    }

    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
`

export const Link = styled.div`
    font-weight: bold;
    cursor:pointer;
    margin: 5%;

    :hover {
    color: rgba(151, 149, 8, 0.698);
    transition: 0.4s;
    transform:scale(1.05);
    }
`

export const detailValue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


export const posterImg = styled.img`
    margin-top: 5%;
    /* max-height: 100%; */
    /* max-width: 100%; */
    width:25vw;
    border: solid 5px;
`

export const arrowChart = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;

    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    
    
    :hover{
        cursor: pointer;
        transition: 0.2s;
        transform:scale(1.05);
    }
`