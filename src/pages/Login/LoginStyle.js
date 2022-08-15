
import background from "../../assets/backgroundlogin.png"
import styled from "styled-components";
import { colors } from "../../contants";


export const MainContainer = styled.div `
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    @media screen and (max-width:1200px){
    background-color: #C9C4A6;
    background-image: none;
    }
`;
export const FormStyles = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -10px;

    img{
        width: 285px;
        height: 140px;
        padding-top: 5rem;
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
    @media screen and (max-width:1200px) {
        margin-top: 0;
        img{
            width: 205px;
            height: 80px; 
        }
        form input{
            width: 200px;
            height: 10px;
            padding: 20px;
            border: 1px solid ${colors.grey};
            border-radius: 4px;
            background: #D7D3BC;
            margin-bottom: 15px;
        }
        a{
            margin-left: 15px;
            font-size: 10px;
            color:#114DA6;
        }
        
    }
`;