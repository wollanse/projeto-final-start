import styled from "styled-components"
import Background from "../../assets/BackPerfil.png"
import { colors } from "../../contants";

export const Container = styled.div `
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;

    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    

    img{
        width: 280px;
        margin-top: 20px;
    }
    h1{
        font-size: 30px;
    }

    @media screen and (max-width:1360px){
    background-color: #C9C4A6;
    background-image: none;
    }

`

export const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 
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
  .button{
      display: flex;
      margin: 10px;
      padding: 1rem;
      gap: 13rem;

      
    }


`
