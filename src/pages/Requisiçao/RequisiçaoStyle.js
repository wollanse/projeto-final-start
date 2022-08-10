import styled from "styled-components"
import background from "../../assets/backgroundRequisicao.png"

export const Container = styled.div`
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
export const Intrucoes = styled.div `

ol{
    li{
        &::before{
            content: "°";
        }
    }
}

`

export const Left = styled.div `
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    form{
        display: flex;
        flex-direction: column;
        width: 65%;
        justify-content: center;

        input, textarea{
            border: 1px solid grey;
            border-radius: 5px;
            padding: 10px;
            margin-top: 15px;
            background-color: #F9F3D4;
        }
    }

    p{
        text-align: center;
        font-size: 20px;
        margin-left: 5px;
    }
    h1{
        text-align: center;
        font-size: 35px;
    }

    form{
        textarea{
            resize: none;
            margin-bottom: 15px;
        }
    }
`;

export const Right = styled.div `
    display:flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 125px;
    .imgreq{
        width: 650px;
    }
    h1{
        margin-top: 40px;
        font-size: 30px;
    }
    li{
        font-size: 20px;
    }
`