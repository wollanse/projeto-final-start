import styled from "styled-components"
import Background from "../../assets/BackPerfil.png"
import { colors } from "../../contants";

export const Container = styled.div `
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    

    img{
        width: 240px;
        margin-top: 20px;
    }
    h1{
        font-size: 30px;
    }

`

export const FormStyle = styled.div`
  min-height: 300px;
  align-items: center;
  text-align: center;
  padding: 30px 30px 0px 30px;

  input{
    width: 200px;
    height: 30px;
    border-radius: 5px;
    margin: 10px 4px;
    border: 1px solid ${colors.grey};
    background: #D7D3BC;
  }
  .button{
    justify-content: space-evenly;
    display: flex;
    margin: 20px;


  }

`