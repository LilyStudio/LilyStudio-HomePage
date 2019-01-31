import React from 'react';
import { connect } from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import SalonCardList from '../components/SalonCard/SalonCardList';

import styles from './Page.css';

import bg from '../assets/img/bg-salon.png';

function SalonPage() {
  return (
    <MainLayout
      bgImage={bg}
      title="SALON"
      intro="Share Our Ideas."
    >
      <div className={styles.normal}>

        <div className={styles.part}>
          <SalonCardList />
        </div>

      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SalonPage);
