import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
`;

export const JobItem = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  background: #fff;
  border-bottom: 1px #ccc solid;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
  }

  h2 {
    font-size: 16px;
    font-weight: bold;
  }

  > div {
    
  }
`;
