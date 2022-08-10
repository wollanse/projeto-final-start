
import background from "../../assets/backgroundlogin.png"
import styled from "styled-components";
import { colors } from "../../contants";


export const MainContainer = styled.div `
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 100%;
`;
export const FormStyles = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 35px 0;

    img{
        width: 285px;
        height: 140px;
        margin: 7px 0;
    }
    form{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input{
            width: 300px;
            height: 20px;
            padding: 20px;
            border: 1px solid ${colors.grey};
            border-radius: 4px;
            background: #D7D3BC;
            margin-bottom: 15px;
        }
    }
    a{
        margin-left: 15px;
        font-size: 13px;
        color:#114DA6;
    }
    h1{
        font-size: 35px;
    }

`;