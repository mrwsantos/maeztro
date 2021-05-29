import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import SubLinksSuite from './SubLinksSuite';

import { ReactComponent as Logo } from '../Assets/logo/maeztro-logo.svg';
import { ReactComponent as Cogs } from '../Assets/icons/icon-cogs.svg';
import { ReactComponent as Exit } from '../Assets/icons/icon-exit.svg';
import { ReactComponent as AddUser } from '../Assets/icons/icon-adduser.svg';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  const [admin, setAdmin] = React.useState(false);
  // console.log('data-header: ', data);

  React.useEffect(() => {
    let admin = window.localStorage.getItem('userLoggedIn');
    if (admin) {
      const split = admin.split(',');
      // console.log(split[4]);
      if (split[4] === 'admin') {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    }
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/" aria-label="">
        <Logo />
      </Link>
      <nav className={`${styles.nav}`}>
        <SubLinksSuite />
        {data && (
          <div className={styles.login} to="/">
            {data[0].username}
            <img
              src={data[0].imgUser}
              className={styles.loginImgUser}
              alt="imagem do usuario logado"
            />
            <ul className={styles.loginDropdown}>
              {admin && (
                <Link className={styles.loginDropdownItem} to="/" aria-label="">
                  <AddUser />
                  Convidar
                </Link>
              )}
              <Link className={styles.loginDropdownItem} to="/" aria-label="">
                <Cogs />
                Ajustes
              </Link>
              <button className={styles.loginDropdownItem} onClick={userLogout}>
                <Exit />
                Sair
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
