import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import MentoraLogo from '../../assets/mentora-logo.png';
import JobsList from './JobsList';
import { Container, Logo, Button } from './styles';

const Home = () => {
  const { push } = useHistory();

  return (
    <Container>
      <header>
        <Logo src={MentoraLogo}/>

        <div>
          <Button onClick={() => push('/signin')}>
            <span>Entrar</span>
          </Button>
          <Link to="/signup">
            Cadastrar
          </Link>
        </div>
      </header>

      <img src={MentoraLogo} alt="Mentora"/>
      
      <main>
        <h1>Vagas abertas na sua região:</h1>
        <JobsList/>
      </main>
    </Container>
  );
}

export default Home;