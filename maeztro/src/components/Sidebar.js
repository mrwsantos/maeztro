import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Sidebar = () => {
  // const { data } = React.useContext(UserContext);
  // console.log(data);

  return (
    <>
      {/* {data && ( */}
      <section className={styles.sidebar}>
        <Link
          className={styles.sidebarItem}
          to="/"
          aria-label="Dogs - Home"
        ></Link>
      </section>
      {/* )} */}
    </>
  );
};

export default Sidebar;
