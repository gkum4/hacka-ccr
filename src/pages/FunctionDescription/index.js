import React, { useEffect, useState } from 'react';

import { sampleFunctionData } from '../../utils/sampleData';
import DashboardTemplate from '../../components/DashboardTemplate';
import userIcon from '../../assets/user-icon.svg';
import { Container, SupervisorContainer } from './styles';

const FunctionDescription = () => {
  const [functionData, setFunctionData] = useState(sampleFunctionData);

  useEffect(() => {
    setFunctionData(sampleFunctionData);
  }, []);

  return (
    <DashboardTemplate>
      <Container>
        <h2>Descrição da Função</h2>

        <h3>Sobre a empresa</h3>
        <p>{functionData.aboutCompany}</p>

        <h3>Função</h3>
        <p>{functionData.employeeFunction}</p>

        <h3>Responsabilidades</h3>
        {functionData.employeeResponsibilities.map((item, index) => (
          <p key={index}>• {item}</p>
        ))}

        <SupervisorContainer>
          <div>
            <h2>Supervisor</h2>
            <p>João Carlos</p>
          </div>
          <img src={userIcon} alt="user icon"/>
        </SupervisorContainer>
      </Container>
    </DashboardTemplate>
  );
}

export default FunctionDescription;
