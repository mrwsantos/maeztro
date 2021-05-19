import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import SubLinksSuite from './SubLinksSuite';

import { ReactComponent as Logo } from '../Assets/maeztro-logo.svg';
import { ReactComponent as Cogs } from '../Assets/cogs.svg';
import { ReactComponent as Exit } from '../Assets/exit.svg';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  const [loggedUser, setLoggedUser] = React.useState(null);

  React.useEffect(() => {
    const loggedIn = window.localStorage.getItem('userLoggedIn');
    if (loggedIn) setLoggedUser(loggedIn.split(','));
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/" aria-label="">
        <Logo />
      </Link>
      <nav className={`${styles.nav}`}>
        <SubLinksSuite />
        {loggedUser ? (
          <div className={styles.login} to="/">
            {loggedUser[1]}
            <ul className={styles.loginDropdown}>
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
        ) : (
          <Link className={styles.login} to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
