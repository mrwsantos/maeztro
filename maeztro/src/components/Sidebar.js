import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

import { ReactComponent as Home } from '../Assets/icons/icon-home.svg';
import { ReactComponent as Docs } from '../Assets/icons/icon-doc.svg';
import { ReactComponent as Faq } from '../Assets/icons/icon-ask-2.svg';
import { ReactComponent as Courses } from '../Assets/icons/icon-courses.svg';

const Sidebar = () => {
  const { data } = React.useContext(UserContext);

  function handleClick(event) {
    var navegador = document.querySelector('.navegador');
    var item = event.target.title;
    // console.log(item);

    switch (item) {
      case 'Home':
        navegador.setAttribute('style', 'top: 30px');
        break;
      case 'Documentação':
        navegador.setAttribute('style', 'top: 100px');
        break;
      case 'FAQ':
        navegador.setAttribute('style', 'top: 180px');
        break;
      case 'Cursos':
        navegador.setAttribute('style', 'top: 250px');
        break;
      default:
        break;
    }
  }

  return (
    <>
      {data && (
        <section className={styles.sidebar}>
          <span className={`${styles.navegador} navegador`}></span>
          <Link
            className={styles.sidebarItem}
            to="/"
            aria-label="Home"
            title="Home"
            onClick={handleClick}
          >
            <Home /> <span>Home</span>
          </Link>
          <Link
            className={styles.sidebarItem}
            to="/documentacao"
            aria-label="Documentação"
            title="Documentação"
            onClick={handleClick}
          >
            <Docs /> <span>Docs</span>
          </Link>
          <Link
            className={styles.sidebarItem}
            to="/faqs"
            aria-label="FAQ"
            title="FAQ"
            onClick={handleClick}
          >
            <Faq /> <span>FAQ</span>
          </Link>
          <Link
            className={styles.sidebarItem}
            to="/cursos"
            aria-label="Cursos"
            title="Cursos"
            onClick={handleClick}
          >
            <Courses /> <span>Cursos</span>
          </Link>
        </section>
      )}
    </>
  );
};

export default Sidebar;
