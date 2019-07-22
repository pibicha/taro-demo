import React from 'react';
import styles from './index.css';
import Header from './Header';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
  return (
    <div className={styles.container}>
    <div className={styles.sidebar}>
      <Header location={location} />
      <div className={styles.content}>
      </div>
    </div>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
}

export default withRouter(Layout);
