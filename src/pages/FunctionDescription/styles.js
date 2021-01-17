import styled from 'styled-components';

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
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 14px;
  }

  p {
    font-size: 16px;
    max-width: 51vw;
    line-height: 27px;
  }
`;

export const SupervisorContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 39px;
  right: 41px;

  h2 {
    margin-bottom: 4px;
  }

  p {
    text-align: end;
  }

  img {
    width: 38px;
    color: #FF4A08;
    margin-left: 20px;
    object-fit: contain;
  }
`;