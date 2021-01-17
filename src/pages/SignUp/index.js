import React, { useCallback, useRef } from 'react';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';

import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';

import Input from '../../components/input';
import Button from '../../components/button';

import getValidationsErrors from '../../utils/getValidationsErrors';

import logo from '../../assets/text-logo.svg';

import { Container, Content, Background, AnimationContainer, SideContainer } from './styles';

const SignUp = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome Obrigatório'),
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido!'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Conta criada!',
          description: 'Você já pode fazer o seu login',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(error);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Error no cadastro',
          description: 'Ocorreu um erro ao cadastro, tente novamente!',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <SideContainer/>          

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <Input
              name="name" 
              icon={FiUser} 
              placeholder="Nome"
              defaultValue="John Doe"            
            />
            <Input
              name="email"
               icon={FiMail}
                placeholder="Email"
                defaultValue="JohnDoe@mentora.com"
              />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
              defaultValue="123456"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>

          {/* <img src={logo} alt="Mentora"/>       */}
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
