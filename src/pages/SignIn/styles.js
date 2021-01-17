import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import signInBackground from '../../assets/signin-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #001C28;
  min-height: 100vh;
  width: 50%;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    font-size: 32px;
    color: #fff;
    margin-bottom: 30px;
    text-align: left;
    max-width: 340px;
  }

  a {
    color: #f4edef;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4edef')};
    }
  }

  > a {
    color: #FF4A08;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#FF4A08')};
    }
  }
`;

export const SideContainer = styled.div`
  display: flex;
  width: 50%;
  min-height: 100vh;
  padding: 46px;
  flex-direction: row-reverse;
  background: url(${signInBackground}) no-repeat center center;
  background-size: cover;

  img {
    height: 22px;
    object-fit: contain;
  }
`;

export const Background = styled.div`
  flex: 1;
`;
