import React from 'react';
import styles from './SubLinksSuite.module.css';
import { Link } from 'react-router-dom';

import { ReactComponent as IconAmazing } from '../Assets/amazing.svg';
import { ReactComponent as IconEditor } from '../Assets/editor.svg';
import { ReactComponent as IconHelp } from '../Assets/help.svg';
import { ReactComponent as IconDns } from '../Assets/web.svg';
import { ReactComponent as IconAnalytics } from '../Assets/analytics.svg';
import { ReactComponent as IconSkuColor } from '../Assets/skucolor.svg';

const SubLinksSuite = () => {
  return (
    <div className={styles.suite} to="/" aria-label="">
      MZ Suite
      <ul className={styles.suiteDropdown}>
        <Link
          className={styles.suiteDropdownItem}
          to="/suite/amazing-menu"
          aria-label=""
        >
          <IconAmazing />
          Amazing Menu
        </Link>
        <Link
          className={styles.suiteDropdownItem}
          to="/suite/editor"
          aria-label=""
        >
          <IconEditor />
          Editor
        </Link>
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
