const { default: styled } = require("styled-components");
export const Container = styled.div` 
      background-image: url(${require(`../../assets/background.png`)});
      background-repeat: no-repeat;
      background-size: cover;

      height: 100%;
    * {
      margin: 0;
      padding: 0;
    }
    
    .home{
      display: flex;
      justify-content: space-between;
    }
      .textop{
          margin-left: 180px;
          margin-top: 100px;
      }
      h1{
          font-size: 50px;
          color: black;
          text-align: center;
      }
      p{
        margin-top: 30px ;
          font-size: 27px;
          color: black;
          margin-bottom: 35px;
      }
      .imgh{
          margin-top: 18px;
      }
      li{
          font-size: 22px;
          margin-top: 15px;
          margin-left: 23px;
      }
    
    @media screen and (max-width:1360px){
        background-color: #C9C4A6;
        background-image: none;

        .imgh{
          display: none;
        }
        .textop{
          margin-left: 0;
          margin-top: 0;
          display: flex;
          flex-wrap: wrap;
          height: 100vh;
          width: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          
        }
        h1{
          font-size: 2rem;
        }
        p{
          font-size: 1rem;
          padding: 1rem;
        }
        li{
          font-size: 1rem;
        }

    }
` 
  