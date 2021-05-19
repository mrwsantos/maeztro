import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { USER_CREATE } from '../../Api';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const navigate = useNavigate();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const { url, options } = USER_CREATE({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const response = await fetch(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeScale">
      <h1 className="title">Criar uma conta</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome de usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button>Criar</Button>
          <Button
            style={{ backgroundColor: '#ccc' }}
            onClick={() => navigate('/')}
          >
            Voltar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default LoginCreate;
