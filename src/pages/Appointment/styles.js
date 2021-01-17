import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;

  > a > img {
    width: 27px;
    object-fit: contain;
    position: absolute;
    top: 17px;
    left: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  max-height: 472px;
  position: relative;

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: #FF4A08;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 36px;
  }

  > a {
    position: absolute;
    left: -80px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    color: #001C28;
    max-width: 344px;
    margin-bottom: 27px;
  }

  h3 {
    font-size: 14px;
    color: #001C28;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 24px;
  }

  input {
    background: #F0F0F0;
    border-radius: 15px;
    display: flex;
    padding: 10px;
    border: none;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const Box = styled.textarea`
  display: flex;
  max-width: 363px;
  padding: 30px 26px;
  background: #F0F0F0;
  border-radius: 15px;
  color: #545357;
  border: none;
`;

export const VerticalLine = styled.div`
  display: flex;
  width: 1px;
  height: 455px;
  background: #E3E3E3;
  margin: 0 75px;
`;

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const AvailableTimes = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  margin-left: 10px;

  h4 {
    font-size: 16px;
    font-weight: normal;
    color: #69686D;
    margin-bottom: 28px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FF4A08;
    border-radius: 72px;
    padding: 7px 20px;
    width: min-content;
    align-self: flex-end;
    margin-top: 80px;

    p {
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #fff;
    }
  }
`;

export const TimesScroll = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TimeItem = styled.div`
  display: flex;
  height: 43px;
  width: 244px;
  justify-content: center;
  align-items: center;
  border: 1px solid #FF4A08;
  border-radius: 10px;
  margin-bottom: 6px;
  color: #FF4A08;
  font-size: 16px;
  cursor: pointer;

  ${({ selected }) => selected && css`
    background: #FF4A08;
    color: #fff;
  `}
`;