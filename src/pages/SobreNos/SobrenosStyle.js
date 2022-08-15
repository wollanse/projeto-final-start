import styled from "styled-components"
import Background from "../../assets/BackPerfil.png"

export const Container = styled.div`
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 100%;

    .group{
        justify-content: space-evenly;
        display: flex;
        padding-top: 4rem;
        
        .link{
            display: flex;
            align-items: center;
            justify-content: center;
        }
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
        text-align: center;
    }
    .text{
        font-size: 25px;
        margin-left: 1%;
        padding: 2rem;
        margin-top: 60px;
        text-align: center;
    }

`