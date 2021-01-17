import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { sampleUserData } from '../../utils/sampleData';
import mLogo from '../../assets/m-logo.svg';
import itemIcon from '../../assets/item-icon.svg';
import profileImg from '../../assets/profile.png';
import { 
  Container,
  Header,
  SideMenu,
  Content,
  MentorshipContainer,
  MentorshipItem,
  CoursesContainer,
  CourseItem,
} from './styles';

const Dashboard = () => {
  const [userData, setUserData] = useState(sampleUserData);

  return (
    <Container>
      <Header>
        <img src={mLogo} alt="Mentora"/>
      </Header>

      <div>
        <SideMenu>
          <img src={profileImg} alt="Profile Image"/>

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

            <button>
              Agendar Mentoria
            </button>
          </div>
        </SideMenu>

        <Content>
          <MentorshipContainer>
            {userData.mentorships.length !== 0 && <h2>Próximas Mentorias</h2>}
            
            {userData.mentorships.map(item => (
              <MentorshipItem>
                <div>
                  <p>{item.date}</p>
                  <h3>{item.name}</h3>
                </div>
                
                <div>
                  <a href={item.link} target="_blank">Entrar na Mentoria</a>
                  <Link>Reagendar</Link>
                </div>
              </MentorshipItem>
            ))}
          </MentorshipContainer>

          <CoursesContainer>
            {userData.courses.length !== 0 && <h2>Treinamentos</h2>}
            
            <div>
              {userData.courses.map(item => (
                <CourseItem image={item.image} progress={item.progress}>
                  {!!item.progress && (
                    <div className="saleContainer">
                      <p>{item.progress}</p>
                    </div>
                  )}
                  <div className="progressBar">
                    <div/>
                  </div>
                </CourseItem>
              ))}
            </div>

          </CoursesContainer>
        </Content>
      </div>
      
    </Container>
  );
}

export default Dashboard;