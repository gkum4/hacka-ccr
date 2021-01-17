import React, { useCallback, useRef } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationsErrors from '../../utils/getValidationsErrors';

import Input from '../../components/input';
import Button from '../../components/button';

import logo from '../../assets/text-logo.svg';

import { Container, Content, AnimationContainer, SideContainer, Background } from './styles';

const SignIn = () => {
  const formRef = useRef(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();  

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido!'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // if(data.email !== 'test@mentora.com' && data.password !== '1234') {
        //   throw new Error();
        // }
        
        await signIn({
          email: data.email,
          password: data.password,
        });        

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(error);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Error na autenticação',
          description: 'Ocorreu um erro ao fazer login! Utilize o email test@mentora.com e senha 1234',
        });
      }
    },
    [addToast, history, signIn],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Bem-vindo a sua plataforma de desenvolvimento pessoal.</h1>
            
            <Input 
              name="email" 
              icon={FiMail} 
              placeholder="email"
              defaultValue="johnDoe@mentora.com"
            />
            
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
              defaultValue="123456"
            />
            <Button type="submit">Entrar</Button>

            <Link to="/forgot-password">esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContainer>

        <SideContainer>
          <img src={logo} alt="Mentora"/>
        </SideContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
