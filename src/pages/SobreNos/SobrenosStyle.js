import styled from "styled-components"
import Background from "../../assets/BackPerfil.png"

export const Container = styled.div`
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 100%;

    .group{
        justify-content: space-around;
        display: flex;
        margin-top: 50px;
        
    }
    .img1{
        width: 210px;
    }
    .img2{
        width: 40px;
        margin: 20px;
    }
    h1{
        text-align: center;
    }
    p{
        font-size: 20px;
        margin-left: 10px;
    }
    .text{
        font-size: 25px;
        margin-left: 30%;
        padding: 1rem;
    }
`