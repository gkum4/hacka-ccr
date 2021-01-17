import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { sampleUserData } from '../../utils/sampleData';

import mLogo from '../../assets/m-logo.svg';
import itemIcon from '../../assets/item-icon.svg';
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
        <SideMenu>
          <img src={profileImg} alt="Profile"/>

          <div>
            <h1>Olá, {userData.name}!</h1>

            <h2>{userData.role}</h2>

            <Link>
              <img src={itemIcon} alt="item icon"/>
              <p>Descrição da Função</p>
            </Link>

            <Link>
              <img src={itemIcon} alt="item icon"/>
              <p>Plano de Carreira</p>
            </Link>

            <Link>
              <img src={itemIcon} alt="item icon"/>
              <p>Cursos</p>
            </Link>

            <Link>
              <img src={itemIcon} alt="item icon"/>
              <p>Desempenho Escolar</p>
            </Link>

            <Link>
              <img src={itemIcon} alt="item icon"/>
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