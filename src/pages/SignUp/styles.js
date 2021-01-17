import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up-background.png';

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
  background: #001C28;

  width: 50%;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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
  min-height: 100vh;
  width: 50%;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    font-size: 32px;
    color: #fff;
    margin-bottom: 30px;
    text-align: center;
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
    color: #f4ede8;
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
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const SideContainer = styled.div`
  display: flex;
  width: 50%;
  min-height: 100vh;
  padding: 46px;
  flex-direction: row-reverse;
  background: url(${signUpBackground}) no-repeat center center;
  background-size: cover;

  img {
    height: 22px;
    object-fit: contain;
  }
`;

export const Background = styled.div`
  flex: 1;
`;
