import React from 'react';
import styles from './Home.module.css';
import Filters from '../Filter/Filters';
import FazerAnuncio from './FazerAnuncio';
import { ANN_GET } from '../../Api';
import Reactions from './Reactions';

const Home = () => {
  const [announcement, setAnnouncement] = React.useState([]);
  const [typeUser, setTypeUser] = React.useState([]);

  React.useEffect(() => {
    var local = window.localStorage.getItem('userLoggedIn');
    var getAdmin = local.split(',');
    setTypeUser(getAdmin[4]);

    getAnnouncements();
  }, []);

  async function getAnnouncements() {
    const { url, options } = ANN_GET();
    const response = await fetch(url, options);
    const json = await response.json();
    setAnnouncement(json);
    // console.log('announcement', json[0].responses);
  }

  if (!announcement) return null;
  return (
    <section className={styles.home}>
      <h2 style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>
        Anúncios gerais
      </h2>
      <div className={styles.homeActions}>
        <Filters />

        {typeUser === 'admin' && (
          <FazerAnuncio getAnnouncements={getAnnouncements} />
        )}
      </div>
      <div className={styles.wrapper}>
        {announcement ? (
          announcement.map(
            ({
              id,
              prioridade,
              categoria,
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
                {/* <a
                  href="#"
                  className={styles.statusFaq + ` statusFaq ${status}`}
                >
                  {status}
                </a> */}
                <a
                  href="#"
                  className={styles.categoria + ` categoria ${categoria}`}
                >
                  {categoria}
                </a>
                <p className={styles.usuarioPerguntaData}>
                  <b className={styles.usuarioPerguntaImg}>
                    <img src={imgUser} alt="" />
                  </b>
                  <b className={styles.usuarioPerguntaNome}>{userQuestion}</b>
                  <span className={styles.usuarioPerguntaDate}> - {date}</span>
                </p>
                <p
                  className={styles.titulo}
                  style={{ marginTop: '1rem', display: 'block' }}
                >
                  {question}
                </p>
                <Reactions />
              </div>
            )
          )
        ) : (
          <div>Não há nenhum anúncio ainda. :c</div>
        )}
      </div>
    </section>
  );
};

export default Home;
