import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0f1a21;
  flex-direction: column;

  header {
    position: fixed;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 30px;
    background: #fff;

    > div {
      display: flex;
      align-items: center;

      a {
        color: #1DA1F2;
        text-decoration: none;
        font-size: 12px;
        margin-left: 25px;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    h1 {
      margin: 15px 0 5px 0;
      font-size: 18px;
      color: #eaeaea;
    }
  }

  > img {
    margin-top: 60px;
    width: 100vw;
    object-fit: contain;
  }
`;

export const Logo = styled.img`
  height: 50px;
  object-fit: contain;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  background: #1DA1F2;
  border-radius: 30px;

  span {
    color: #eaeaea;
    font-size: 12px;
  }
`;