import {createGlobalStyle} from 'styled-components'
import RenderRegisterForm from './Components/HambModal/HambModal'

const GlobalStyle = createGlobalStyle`

//Mantine components
    div .mantine-1hseney{
        pointer-events: auto ;
        cursor: pointer ;
    }
    img .mantine-riw2j3{
        cursor: pointer;
    }


    div .mantine-vfje8a {
        width: 20em;
        /* width: ${({ RenderRegisterForm }) => (RenderRegisterForm ? "30em" : "15em")}; */
        position: absolute;
        top: 15%;
        right: 8% ;
        /* opacity: 0.5 !important; */
    }

    div .mantine-1khjw2v{
        margin-top: 5%;
    }

    //Header z-index when sticky
    div .sticky{
        z-index: 100;
    }    


    //Admin scroll area
    div .mantine-jghxib {
        /* height: auto !important; */
        @media (max-width: 768px) {
            width: 300px !important;
    }



        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
//Movie detail accordion button
    div .mantine-v4lv9f {
        border-bottom: 0;


    }
    div .mantine-bgzycs{
        :hover{
            /* background-color: gray; */
        }
    }

    * {

            font-family: Arial, Helvetica, sans-serif;
            /* font-size: 1.5vw; */
            // CSS you want global. 
        }


`


//Own elements

export default GlobalStyle;
