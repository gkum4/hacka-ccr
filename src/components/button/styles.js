import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #FF4A08;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  &:hover {
    background: ${shade(0.2, '#FF4A08')};
  }
`;
