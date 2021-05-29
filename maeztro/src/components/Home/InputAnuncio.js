import React from 'react';
import styles from './InputAnuncio.module.css';
import Button from '../Form/Button';

const InputAnuncio = ({
  type,
  name,
  value,
  classAdd,
  disabled,
  placeholder,
  onChange,
  error,
  onBlur,
  getAnnouncements
}) => {
  var date = new Date();
  var month = date.getMonth();
  var day = date.getDate();
  var hour = date.getHours();
  var minutes = date.getMinutes();

  const [errorForm, setErrorForm] = React.useState(false);
  const timeoutRef = React.useRef;

  async function handleClick(event) {
    event.preventDefault();

    let username = window.localStorage.getItem('userLoggedIn');
    const split = username.split(',');
    let textPergunta = document.querySelector('#formPergunta textarea').value;
    let prior = document.querySelector('#formPergunta select.prior').value;
    let category = document.querySelector('#formPergunta select.category')
      .value;
    // console.log(prior);

    if (textPergunta !== '') {
      let dados = {
        question: textPergunta,
        userQuestion: split[1],
        prioridade: prior,
        categoria: category,
        date: `${day}/${month} ${hour}:${minutes}`,
        imgUser: split[3],
        responses: []
      };

      try {
        const response = await fetch(`http://localhost:3004/announcements`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dados)
        });
        const data = await response.json();
        // console.log(data);
        timeoutRef.current = setTimeout(getAnnouncements(), 2000);
        document.querySelector('#modal-close').click();
      } catch (err) {
        throw new Error('Erro, deu plau: ', err);
      }
    } else {
      setErrorForm(true);
      timeoutRef.current = setTimeout(() => setErrorForm(false), 3000);
    }
  }

  return (
    <div className={`${styles.inputAnuncio} inputAnuncio ${classAdd}`}>
      <textarea
        id={name}
        name={name}
        className={`${styles.textarea}`}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errorForm && (
        <p style={{ color: 'tomato' }}>Preencha a pergunta, fera.</p>
      )}
      <Button
        onClick={handleClick}
        style={{
          fontSize: '1.5rem',
          padding: ' 0 .3rem',
          minWidth: 'initial',
          flex: '1'
        }}
      >
        Enviar sem medo
      </Button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputAnuncio;
