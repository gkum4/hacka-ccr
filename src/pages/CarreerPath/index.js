import React from 'react';

import checkIcon from '../../assets/check-icon.svg';
import DashboardTemplate from '../../components/DashboardTemplate';
import { 
  Container, 
  Content,
  ItemContainer,
  ItemSideContainer,
  ItemTextContainer,
} from './styles';

const FunctionDescription = () => {
  return (
    <DashboardTemplate>
      <Container>
        <h2>Planejamento de Crescimento</h2>

        <Content>
          <div>
            <h3>Trabalho</h3>

            <ItemContainer>
              <ItemSideContainer check>
                <div className="circle">
                  <img src={checkIcon} alt="Check"/>
                </div>
                <div className="verticalLine"/>
              </ItemSideContainer>
              
              <ItemTextContainer>
                <h4>Jovem Aprendiz</h4>
                <p>Aprendiz é forma de contratação de jovens para estimular primeiro emprego e profissionalização.</p>
                <a href="https://pt.wikipedia.org/wiki/Lei_do_Aprendiz" target="_blank" rel="noreferrer">Saiba Mais</a>
              </ItemTextContainer>
            </ItemContainer>

            <ItemContainer>
              <ItemSideContainer>
                <div className="circle"/>
                <div className="verticalLine"/>
              </ItemSideContainer>
              
              <ItemTextContainer>
                <h4>Estagiário</h4>
                <p>Estágio é o período no qual os estudantes de uma graduação podem colocar em prática os conhecimentos adquiridos em sala de aula.</p>
                <a href="https://pt.wikipedia.org/wiki/Est%C3%A1gio_profissional" target="_blank" rel="noreferrer">Saiba Mais</a>
              </ItemTextContainer>
            </ItemContainer>

            <ItemContainer>
              <ItemSideContainer>
                <div className="circle"/>
              </ItemSideContainer>
              
              <ItemTextContainer>
                <h4>Contratado</h4>
                <p>Contratado é um indivíduo que presta serviço para a empresa, seja como funcionário externo ou interno, freelance, consultor, agência ou apenas um prestador de serviços.</p>
                <a href="https://pt.wikipedia.org/wiki/Empregado" target="_blank" rel="noreferrer">Saiba Mais</a>
              </ItemTextContainer>
            </ItemContainer>
          </div>
          
          <div>
            <h3>Estudos</h3>

            <ItemContainer>
              <ItemSideContainer check>
                <div className="circle">
                  <img src={checkIcon} alt="Check"/>
                </div>
                <div className="verticalLine"/>
              </ItemSideContainer>
              
              <ItemTextContainer>
                <h4>Ensino Básico</h4>
                <p>Ensino básico é o nível de ensino correspondente aos primeiros anos de educação escolar ou formal.</p>
                <a href="https://pt.wikipedia.org/wiki/Educa%C3%A7%C3%A3o_b%C3%A1sica" target="_blank" rel="noreferrer">Saiba Mais</a>
              </ItemTextContainer>
            </ItemContainer>

            <ItemContainer>
              <ItemSideContainer>
                <div className="circle"/>
                <div className="verticalLine"/>
              </ItemSideContainer>
              
              <ItemTextContainer>
                <h4>Ensino Técnico</h4>
                <p>Ensino técnico é um nível de ensino enquadrado no nível médio dos sistemas educativos, referindo-se normalmente a uma educação realizadas em escolas secundárias ou outras instituições que conferem graus académicos ou diplomas profissionais.</p>
                <a href="https://pt.wikipedia.org/wiki/Ensino_t%C3%A9cnico">Saiba Mais</a>
              </ItemTextContainer>
            </ItemContainer>

            <ItemContainer>
              <ItemSideContainer>
                <div className="circle"/>
              </ItemSideContainer>
              
              <ItemTextContainer>
                <h4>Ensino Superior</h4>
                <p>Ensino superior, educação superior ou ensino terciário é o nível mais elevado dos sistemas educativos, referindo-se normalmente a uma educação realizada em universidades, faculdades, institutos politécnicos, escolas superiores ou outras instituições que conferem graus académicos ou diplomas profissionais.</p>
                <a href="https://pt.wikipedia.org/wiki/Ensino_superior">Saiba Mais</a>
              </ItemTextContainer>
            </ItemContainer>
          </div>
        </Content>
      </Container>
    </DashboardTemplate>
  );
}

export default FunctionDescription;
