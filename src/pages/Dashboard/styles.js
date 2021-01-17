import styled from 'styled-components';

const sideMenuWidth = 26 * window.innerWidth/100;

export const MentorshipContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${(window.innerHeight - 100)/2}px;
  overflow-y: auto;
  margin-bottom: 20px;

  h2 {
    font-size: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #FF4A08;
    margin-bottom: 15px;
  }
`;

export const MentorshipItem = styled.div`
  display: flex;
  background: #F0F0F0;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 16px;
      color: #69686D;
    }

    h3 {
      font-size: 22px;
      color: #001c28;
      font-weight: normal;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: row;

    a:first-child {
      display: flex;
      font-size: 14px;
      padding: 7px 20px;
      text-align: center;
      color: #FF4A08;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border-radius: 72px;
      border: 1px solid #FF4A08;
      margin-right: 30px;
    }

    button {
      display: flex;
      background: #FF4A08;
      padding: 7px 20px;
      border-radius: 72px;

      p {
        text-align: center;
        font-size: 14px;
        color: #fff;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
    }
  }
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${(window.innerHeight - 100)/2}px;

  h2 {
    font-size: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #FF4A08;
    margin-bottom: 15px;
  }

  > div {
    width: ${window.innerWidth - sideMenuWidth}px;
    height: 37vh;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const CourseItem = styled.div`
  display: flex;
  flex: 0 0 auto;
  position: relative;
  height: 35vh;
  width: 30vh;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: contain;
  margin-right: 10px;

  .saleContainer {
    position: absolute;
    top: 1.66vh;
    left: 1.66vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #23D7FF;
    padding: 5px 11px;
    border-radius: 14px;

    > p {
      font-size: 14px;
      color: #001c28;
    }
  }

  .progressBar {
    position: absolute;
    height: 32vh;
    width: 1vh;
    border-radius: 1vh;
    right: 1vh;
    top: 1.33vh;
    display: flex;
    flex-direction: column-reverse;
    background: #fff;

    > div {
      display: flex;
      height: ${({ progress }) => progress};
      background: #23D7FF;
      border-radius: 1vh;
    }
  }
`;