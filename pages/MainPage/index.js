import React, {useState} from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button} from './styles';

import githubLogo from '../../assets/images/github-logo.svg';


const MainPage = () =>{
  const [login, setLogin] = useState('');

  return(
    <Container>
      <Logo src={githubLogo} alt='API Github' />
      <Title>Api Github</Title>
      <Form>
        <Input placeholder='Buscar por usuário' value={login} onChange={(event) => setLogin(event.target.value)}/>
        <Button to={`/${login}/repositores`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  )};

export default MainPage;
