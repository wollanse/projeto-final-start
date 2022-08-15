import styled from "styled-components";
import { colors } from "../../contants";


export const Container = styled.div`
    background-color: #ffffff;
    max-width: 50vw;
    min-height: 50vh;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #F9F3D4;
    border: 1px solid ${colors.black};
    h1{
        font-size: 9vh;
    }
    p{
        font-size: 4vh;
    }
    .butao{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        padding: 3vh;
        button{
            
            border-radius: 5px;
            height: 5vh;
            width: 20vh;
        }
        .fechar{
            background-color: ${colors.red};
            border: 1px solid ${colors.red};
            color: #ffffff;
            font-size: 1.3em;
        }
        .confirmar{
                background-color: ${colors.green};
                color: #ffffff;
                font-size: 1.3em;
                border: 1px solid ${colors.green};
            }
    }
`

export const Back = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba (0,0,0,0.2);
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
`