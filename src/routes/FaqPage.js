import React from 'react';
import { connect } from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import FaqCardList from '../components/FaqCard/FaqCardList';

import styles from './Page.css';

import bg from '../assets/img/bg-faq.png';

function FaqPage() {
  return (
    <MainLayout
      bgImage={bg}
      title="FAQ"
      intro="Most questions we have been asked."
    >
      <div className={styles.normal}>

        <div className={styles.part}>
          <FaqCardList />
        </div>
      </div>

    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(FaqPage);
