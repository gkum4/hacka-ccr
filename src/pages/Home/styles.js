import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0f1a21;
  flex-direction: column;
  justify-content: center;

  > div {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    a {
      color: #1DA1F2;
      text-decoration: none;
      font-size: 12px;
      margin-left: 25px;
    }
  }
`;

export const Logo = styled.img`
  width: 100vw;
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