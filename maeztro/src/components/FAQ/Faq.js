import React from 'react';
import styles from './Faq.module.css';
import { FAQ_GET } from '../../Api';
import InputResposta from './InputResposta';
import FazerPergunta from './FazerPergunta';
import Filters from '../Filter/Filters';

const Faq = () => {
  const [perguntas, setPerguntas] = React.useState([]);

  React.useEffect(() => {
    getFaqs();
  }, []);

  async function getFaqs() {
    const { url, options } = FAQ_GET();
    const response = await fetch(url, options);
    const json = await response.json();
    setPerguntas(json);
    // console.log('perguntas', json[0].responses);
  }

  if (!perguntas) return null;
  return (
    <>
      <section className={styles.faq}>
        <h2 style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>FAQ</h2>
        <div className={styles.faqActions}>
          <Filters />
          <FazerPergunta getFaqs={getFaqs} />
        </div>
        <div className={styles.wrapper}>
          {perguntas ? (
            perguntas.map(
              ({
                id,
                prioridade,
                status,
                date,
                question,
                userQuestion,
                imgUser,
                responses
              }) => (
                <div
                  key={id}
                  className={`${styles.pergunta} nota animeScale ${prioridade}`}
                  id={id}
                >
                  <span
                    className={styles.prioridade + ` prioridade ${prioridade}`}
                  >
                    {prioridade}
                  </span>
                  <a
                    href="#"
                    className={styles.statusFaq + ` statusFaq ${status}`}
                  >
                    {status}
                  </a>
                  <p className={styles.usuarioPerguntaData}>
                    <b className={styles.usuarioPerguntaImg}>
                      <img src={imgUser} alt="" />
                    </b>
                    <b className={styles.usuarioPerguntaNome}>{userQuestion}</b>
                    <span className={styles.usuarioPerguntaDate}>
                      {' '}
                      - {date}
                    </span>
                  </p>
                  <h3 className={styles.titulo}>{question}</h3>
                  <div className={styles.wrapperComments}>
                    {responses ? (
                      responses.map(({ id, user, date, comment }) => (
                        <div key={id} className={styles.respostas}>
                          <p className={styles.usuarioRespostaData}>
                            <b className={styles.usuarioRespostaNome}>{user}</b>
                          </p>
                          <p className={styles.usuarioRespostaDate}>{date}</p>
                          <p className={styles.resposta}>{comment}</p>
                        </div>
                      ))
                    ) : (
                      <div className={styles.semResposta}>
                        Sem respostas ainda. :( Volte mais tarde...
                      </div>
                    )}
                  </div>
                  {status !== 'fechado' && (
                    <InputResposta placeholder="Responder" getFaqs={getFaqs} />
                  )}
                </div>
              )
            )
          ) : (
            <div>Não há nenhuma pergunta ainda. :c</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Faq;
