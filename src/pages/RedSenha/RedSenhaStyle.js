import styled from "styled-components";
import Background from "../../assets/BackPerfil.png"
import { colors } from "../../contants";



export const Container = styled.div`
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
`

export const FormStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 
    img{
        width: 285px;
        height: 130px;
        margin-top: 2%;
    }
    form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
    input{
        width: 500px;
        height: 40px;
        border-radius: 5px;
        margin: 10px 4px;
        border: 1px solid ${colors.grey};
        background: #F9F3D4;
    }

    }
    h1{
        font-size: 30px;
    }
    p{
        font-size: 20px;
    }
    button{
        margin-bottom: 7%;
        margin-top: 1%;
    }
`