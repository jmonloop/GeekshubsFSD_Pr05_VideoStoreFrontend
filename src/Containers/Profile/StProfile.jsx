import styled from 'styled-components';
//Declaro un nuevo elemento DIV llamado headerContainter. Para "pintarlo" en el jsx lo haremos con <S.headerContainer><S.headerContainer/>
export const profileContainer = styled.div`
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

export const profileBox = styled.div`
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

export const profileRow = styled.div`
    height: 20%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const profileKey = styled.div`
    /* margin-top: 5%; */
    height:100%;
    width: 100%;

    /* border-style: solid; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* background-color: gray; */
`
export const profileValue = styled.div`
    /* margin-top: 5%; */
    height:100%;
    width: 100%;

    /* border-style: solid; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* background-color: gray; */
`