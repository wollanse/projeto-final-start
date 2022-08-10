const { default: styled } = require("styled-components");

export const Container = styled.div` 
    background-color: #6F8F4E;
    height: 90px;
    max-height: 320px;
    display: flex;
    justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  .logo {
    width: 70px;
    margin-left: 30px;
    margin-top: 5px;
  }

  header {
    display: flex;
    align-items: center;
    margin-left: 150px;
  }

  header button {
    margin: 0 15px;
  }

  header button a {
    font-size: 20px;
    font-weight: 500;
  }

  header button {
    background: transparent;
    color: white;
    border: none;
  }

  #logcad {
    display: flex;
    align-items: center;
  }

  #logcad button {
    background: transparent;
    color: white;
    border: none;
    margin: 0 15px;
    margin-right: 40px;
  }

  #logcad button a {
    border: 1px solid white;
    padding: 5px 15px;
    border-radius: 15px;
  }
`
