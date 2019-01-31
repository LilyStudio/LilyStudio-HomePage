/**
 * Created by Hitigerzzz on 2017/6/18.
 */
import React from 'react';
import { connect } from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import RecordInfo from '../components/RecordInfo/RecordInfo';

import bg from '../assets/img/bg-record.png';

import styles from './Page.css';

function RecordInfoPage() {
  return (

    <MainLayout
      bgImage={bg}
    >
      <div className={styles.normal}>
        <div className={styles.part}>
          <RecordInfo />
        </div>
      </div>
    </MainLayout>

  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(RecordInfoPage);
