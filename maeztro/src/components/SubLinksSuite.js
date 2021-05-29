import React from 'react';
import styles from './SubLinksSuite.module.css';
import { Link } from 'react-router-dom';

import { ReactComponent as IconAmazing } from '../Assets/icons/icon-amazing.svg';
import { ReactComponent as IconEditor } from '../Assets/icons/icon-editor.svg';
import { ReactComponent as IconHelp } from '../Assets/icons/icon-help.svg';
import { ReactComponent as IconDns } from '../Assets/icons/icon-web.svg';
import { ReactComponent as IconAnalytics } from '../Assets/icons/icon-analytics.svg';
import { ReactComponent as IconSkuColor } from '../Assets/icons/icon-skucolor.svg';

const SubLinksSuite = () => {
  return (
    <div className={styles.suite} to="/" aria-label="">
      MZ Suite
      <ul className={styles.suiteDropdown}>
        <a
          className={styles.suiteDropdownItem}
          href="http://www.quatrodigital.com.br/amazing_menu/"
          target="_blank"
          aria-label=""
        >
          <IconAmazing />
          Amazing Menu
        </a>
        <a
          className={styles.suiteDropdownItem}
          href="http://www.quatrodigital.com.br/editor/"
          target="_blank"
          aria-label=""
        >
          <IconEditor />
          Editor
        </a>
        <Link
          className={styles.suiteDropdownItem}
          to="/suite/dns-validator"
          aria-label=""
        >
          <IconDns />
          DNS Validator
        </Link>
        <Link
          className={styles.suiteDropdownItem}
          to="/suite/analytics"
          aria-label=""
        >
          <IconAnalytics />
          Analytics
        </Link>
        <Link
          className={styles.suiteDropdownItem}
          to="/suite/sku-color-editor"
          aria-label=""
        >
          <IconSkuColor />
          SKU Color Editor
        </Link>
        <Link
          className={styles.suiteDropdownItem}
          to="/suite/help"
          aria-label=""
        >
          <IconHelp />
          Help
        </Link>
      </ul>
    </div>
  );
};

export default SubLinksSuite;
