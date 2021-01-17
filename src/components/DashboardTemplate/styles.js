import styled from 'styled-components';

const sideMenuWidth = 26 * window.innerWidth/100;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow-y: auto;

  a {
    text-decoration: none;
  }

  > div:last-child {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  background: #001C28;
  padding: 15px;
  justify-content: space-between;

  button {
    &:hover {
      cursor: pointer;
    }
    
    img {
      width: 24px;
      object-fit: contain;
    }
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: ${sideMenuWidth};
  background: #F0F0F0;

  img {
    width: 100%;
    object-fit: contain;
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 37px 42px;
    height: 100%;

    h1 {
      font-size: 36px;
      font-weight: normal;
      color: #001c28;
    }

    h2 {
      margin-top: 11px;
      font-size: 16px;
      font-weight: 500;
      color: #ff4a08;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 20px;
    }

    a {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      background: transparent;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      img {
        width: 20px;
        object-fit: contain;
        margin-right: 7px;
      }

      p {
        font-size: 16px;
        color: #001c28;
        text-transform: uppercase;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FF4A08;
      padding: 7px 20px;
      border-radius: 72px;
      width: fit-content;
      align-self: center;
      position: absolute;
      bottom: 51px;

      p {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px 46px;
  flex-direction: column;
  position: relative;
  background: #fff;
`;

