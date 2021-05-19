import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../../Helpers/Error';

import styles from './LoginForm.module.css';
import stylesBtn from '../Form/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeScale">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Esqueci minha senha
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastrar</h2>
        <p>
          Não tem conta ainda?
          <small style={{ display: 'block' }}>
            (Só poderá criar uma caso tenha sido convidado)
          </small>
        </p>

        <Link className={`${stylesBtn.button} invited`} to="/login/criar">
          Ja fui convidado.
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
