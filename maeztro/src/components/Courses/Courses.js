import React from 'react';
import styles from './Courses.module.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <section className={styles.cursos}>
      <h2>Cursos</h2>

      <div>
        <Link
          to="/curso/padrao de projetos MZ"
          className={`${styles.item} animeScale`}
        >
          <img
            src="https://i.ytimg.com/vi/qNT8LuRPCTI/maxresdefault.jpg"
            alt="logo"
          />
          <span className={styles.cursoNome}>Padrão de projetos MZ</span>
        </Link>
        <Link to="/curso/cms" className={`${styles.item} animeScale`}>
          <img
            src="https://ncdn0.infojobs.com.br/logos/2015/04/07/362077.jpg?f=44092.5859242245"
            alt="logo"
          />
          <span className={styles.cursoNome}>CMS</span>
        </Link>
        <Link to="/curso/vtexio" className={`${styles.item} animeScale`}>
          <img
            src="https://vtex.com/wp-content/uploads/2020/07/vtex-thumb.jpg"
            className="logo"
            alt=""
          />
          <span className={styles.cursoNome}>VTEX IO</span>
        </Link>
        <Link to="/curso/vtexv2" className={`${styles.item} animeScale`}>
          <img
            src="https://avatars.githubusercontent.com/u/12614072?s=200"
            className=""
            alt=""
          />
          <span className={styles.cursoNome}>VTEX IO 2.0</span>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
