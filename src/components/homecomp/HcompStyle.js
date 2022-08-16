const { default: styled } = require("styled-components");


export const Container = styled.div`
    max-width: 750px;
    margin-left: 230px;
    margin-top: 140px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 6rem;
    padding: 1rem;
    nobr{
        font-size: 30px;
        color: black;
    }
    .img1{
        width: 180px;
    }
    .img2{
        width: 90px;
    }
    .text{
        margin-top: 18px;
    }
    .negrito{
        font-weight: bold;
    }
    @media screen and (max-width:1200px){
        display: none;
    }
`
