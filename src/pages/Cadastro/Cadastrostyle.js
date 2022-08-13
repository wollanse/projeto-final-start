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
    margin-top: -10px;

    img{
        width: 300px;
        margin-bottom: 15px;
        padding: 2rem;
    }
    form{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input{
            width: 90%;
            padding: 10px;
            border: 1px solid ${colors.grey};
            border-radius: 4px;
            background: #F9F3D4;
            margin-bottom: 15px;
        }

        .endereco{
            display: flex;
            justify-content: center;

            .adress{
                width: 50%;
                margin-right: 15px;
            }

            .numero{
                width: 30%;
            }
        }
    }
`;