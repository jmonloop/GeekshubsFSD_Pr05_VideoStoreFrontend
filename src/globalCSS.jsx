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
`


//Own elements

export default GlobalStyle;
