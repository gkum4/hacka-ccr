import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { sampleUserData } from '../../utils/sampleData';

import mLogo from '../../assets/m-logo.svg';
import {ReactComponent as ItemIcon} from '../../assets/item-icon.svg';
import exitIcon from '../../assets/exit-icon.svg';
import profileImg from '../../assets/profile.png';

import { 
  Container,
  Header,
  SideMenu,
  Content,
  Button
} from './styles';

const DashboardTemplate = ({ children }) => {
  const [userData, setUserData] = useState(sampleUserData);

  const { push } = useHistory();

  useEffect(() => {
    setUserData(sampleUserData);
  }, []);

  const handleBack = () => {
    push('/appointment');
  };

  return (
    <Container>
      <Header>
        <Link to="/dashboard"><img src={mLogo} alt="Mentora"/></Link>
        <button><img src={exitIcon} alt="sair"/></button>
      </Header>

      <div>
        <SideMenu currentHref={window.location.href.split('/')[window.location.href.split('/').length-1]}>
          <img src={profileImg} alt="Profile"/>

          <div>
            <h1>Olá, {userData.name}!</h1>

            <h2>{userData.role}</h2>

            <Link to='/function-description'>
              <ItemIcon/>
              <p>Descrição da Função</p>
            </Link>

            <Link to='/carreer-path'>
              <ItemIcon/>
              <p>Plano de Crescimento</p>
            </Link>

            <Link to='/dashboard'>
              <ItemIcon/>
              <p>Cursos</p>
            </Link>

            <Link to='/dashboard'>
              <ItemIcon/>
              <p>Desempenho Escolar</p>
            </Link>

            <Link to='/dashboard'>
              <ItemIcon/>
              <p>Capacitações</p>
            </Link>
            
            <Button onClick={handleBack}>   
              <p>Agendar Mentoria</p>
            </Button>            
          </div>
        </SideMenu>

        <Content>
          {children}
        </Content>
      </div>
      
    </Container>
  );
}

export default DashboardTemplate;