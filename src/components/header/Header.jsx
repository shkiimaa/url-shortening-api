import React from 'react';
import styles from '../header/header.module.css';
import { ReactComponent as Logo } from '../../common/images/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>
          <Logo></Logo>
        </h1>
        <nav>
          <ul className={styles.navBar}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className={styles.signBox}>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
