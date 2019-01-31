/**
 * Created by Hitigerzzz on 2017/6/18.
 */
import React from 'react';
import { connect } from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';

import styles from './Page.css';

import bg from '../assets/img/bg-project.png';

function ProjectInfoPage() {
  return (
    <MainLayout
      bgImage={bg}
    >
      <div className={styles.normal}>
        <div className={styles.part}>
          <ProjectInfo />
        </div>
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ProjectInfoPage);
