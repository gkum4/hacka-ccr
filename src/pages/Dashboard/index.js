import React, { useEffect, useState } from 'react';

import { sampleUserData } from '../../utils/sampleData';
import { 
  MentorshipContainer,
  MentorshipItem,
  CoursesContainer,
  CourseItem,
} from './styles';
import DashboardTemplate from '../../components/DashboardTemplate';

const Dashboard = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(sampleUserData);

    document.getElementById('courses').addEventListener('wheel', function(e) {
      if (e.deltaY > 0) {
        document.getElementById('courses').scrollBy({left: 50 });
      } else {
        document.getElementById('courses').scrollBy({left: -50 });
      }
    });
  }, []);

  return (
    <DashboardTemplate>
      <MentorshipContainer>
        {userData.mentorships.length !== 0 && <h2>Próximas Mentorias</h2>}
        
        {userData.mentorships.map(item => (
          <MentorshipItem>
            <div>
              <p>{item.date}</p>
              <h3>{item.name}</h3>
            </div>
            
            <div>
              <a href={item.link} target="_blank" rel="noreferrer">Entrar na Mentoria</a>
              <button><p>Reagendar</p></button>
            </div>
          </MentorshipItem>
        ))}
      </MentorshipContainer>

      <CoursesContainer>
        {userData.courses.length !== 0 && <h2>Treinamentos</h2>}
        
        <div id="courses">
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
    </DashboardTemplate>
  );
}

export default Dashboard;