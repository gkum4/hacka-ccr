import React from 'react';
import { Link } from 'react-router-dom';

import MentoraLogo from '../../assets/mentora-logo.png';
import { Container, Logo, Button } from './styles';

const Home = () => {
  return (
    <Container>
      <Logo src={MentoraLogo}/>

      <div>
        <Button>
          <span>Entrar</span>
        </Button>
        <Link>
          Cadastrar
        </Link>
      </div>
    </Container>
  );
}

export default Home;