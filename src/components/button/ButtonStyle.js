import styled from "styled-components";
import { colors } from "../../contants";

export const ButtonStyle = styled.button`
    cursor: pointer;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${(props) => props.color};
    padding: 10px 45px;
    border: none;
    border-radius: 10px;
    color: ${colors.white};
    font-weight: bold;
    font-weight: 800;
    font-size: 16px;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};

    &:hover{
        background: ${(props) => props.backcolor};
    }
`;