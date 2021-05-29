import React from 'react';
import styles from './InputResposta.module.css';
import Button from '../Form/Button';

const InputResposta = ({
  type,
  name,
  value,
  classAdd,
  disabled,
  placeholder,
  onChange,
  error,
  onBlur,
  getFaqs
}) => {
  async function handleClick({ target }) {
    var textResposta = target.previousSibling.value;
    var rand = Math.floor(Math.random() * 154654654545600);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var username = window.localStorage.getItem('userLoggedIn');
    var splitName = username.split(',');

    if (textResposta !== '') {
      var idPergunta = target.closest('.nota').getAttribute('id');

      try {
        //PRIMEIRO FAZER FUNCAO GET PRA PEGAR RESPONSES
        const response = await fetch(
          `http://localhost:3004/faqs/${idPergunta}/`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        const data = await response.json();
        let a = data.responses;
        let objeto = {
          id: rand,
          user: splitName[1],
          date: `${day}/${month}/${year} ${hour}:${minutes}`,
          comment: textResposta
        };
        a.push(objeto);

        //DEPOIS FAZER O PATCH
        saveComment(idPergunta, a, target);
      } catch (err) {
        throw new Error('Erro no envio de resposta =>', err);
      }
    }
  }

  async function saveComment(idPergunta, data, target) {
    const response = await fetch(`http://localhost:3004/faqs/${idPergunta}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ responses: data })
    });

    const json = await response.json();
    // console.log(json);

    //puxa as faqs ja atualizadas
    getFaqs();
    //limpa o campo
    console.log((target.previousSibling.value = ''));
  }

  return (
    <div className={`${styles.inputResposta} inputResposta ${classAdd}`}>
      <textarea
        id={name}
        name={name}
        className={`${styles.textarea} comentario`}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
      <Button
        onClick={handleClick}
        style={{
          fontSize: '1.5rem',
          padding: ' 0 .3rem',
          minWidth: 'initial',
          flex: '1'
        }}
      >
        ➤
      </Button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputResposta;
