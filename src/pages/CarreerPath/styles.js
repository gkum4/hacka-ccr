import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 11px;
    font-size: 16px;
    font-weight: 500;
    color: #ff4a08;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 45px;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  a {
    color: #FF4A08;
    font-weight: normal;
    text-decoration: underline;
    text-transform: uppercase;
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    flex: 1;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-right: 40px;

  .circle {
    display: flex;
    width: 38px;
    height: 38px;
    border-radius: 19px;
    border: 1px solid #FF4A08;
    background: #fff;
    position: absolute;
    top: 0;
    align-items: center;
    justify-content: center;

    ${({ check }) => check && css`background: #FF4A08;`}
  }

  .verticalLine {
    display: flex;
    width: 1px;
    height: 100%;
    background: #FF4A08;
  }
`;

export const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  max-width: 300px;
`;

