import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

import styles from './MainLayout.css';

function MainLayout({children, bgImage, title, intro }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <Banner
        image={bgImage}
        title={title}
        intro={intro}
      />
      <div className="container">
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
