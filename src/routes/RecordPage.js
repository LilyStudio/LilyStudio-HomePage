import React from 'react';
import {connect} from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import RecordCardList from '../components/RecordCard/RecordCardList';

import bg from '../assets/img/bg-record.png';

import styles from './Page.css';

function RecordPage() {
  return (

    <MainLayout
      bgImage={bg}
      title="RECORD"
      intro="Check Out Our Activities."
    >
      <div className={styles.normal}>
        <div className={styles.part}>
          <h5>2017</h5>
          <RecordCardList />
        </div>
      </div>
    </MainLayout>

  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(RecordPage);
