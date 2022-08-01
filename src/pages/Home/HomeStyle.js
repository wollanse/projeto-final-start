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
    
    p,
    h1 {
      color: white;
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
      font-size: 27px;
      color: black;
  }
  .imgh{
      margin-top: 18px;
  }
  li{
      font-size: 22px;
      margin-top: 8px;
      margin-left: 23px;
  }
` 
  