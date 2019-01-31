import React from 'react';
import {connect} from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import MemberCardList from '../components/MemberCard/MemberCardList';

import styles from './Page.css';

import bg from '../assets/img/bg-member.png';


function MemberPage() {
  return (
    <MainLayout
      bgImage={bg}
      title="MEMBER"
      intro="Family full with love."
    >
      <div className={styles.normal}>

        <div className={styles.part}>
          <h5>策划组</h5>
          <MemberCardList />
        </div>

        <div className={styles.part}>
          <h5>美工组</h5>
          <MemberCardList />
        </div>

        <div className={styles.part}>
          <h5>技术组</h5>
          <MemberCardList />
        </div>

      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MemberPage);
