import styled from "styled-components";
import background from "../../assets/backCadastro.svg"
import { colors } from "../../contants";

export const MainContainer = styled.div `
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const formStyles = styled.div ` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;

    img{
        width: 300px;
        margin-bottom: 15px;
        margin: 25px 0;
    }
    form{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input{
            width: 75%;
            padding: 10px;
            border: 1px solid ${colors.grey};
            border-radius: 4px;
            background: #D7D3BC;
            margin-bottom: 15px;
        }

        .endereco{
            display: flex;
            justify-content: center;

            .adress{
                width: 40%;
                margin-right: 15px;
            }

            .numero{
                width: 25%;
            }
        }
    }

`;