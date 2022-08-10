const { default: styled } = require("styled-components");
export const Container = styled.div` 
      background-image: url(${require(`../../assets/background.png`)});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: fixed;
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
` 
  