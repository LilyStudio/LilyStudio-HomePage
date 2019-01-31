import React from 'react';
import { connect } from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import ProjectCardList from '../components/ProjectCard/ProjectCardList';

import styles from './Page.css';

import bg from '../assets/img/bg-project.png';

function ProjectPage() {
  return (
    <MainLayout
      bgImage={bg}
      title="PROJECT"
      intro="Amazing projects."
    >
      <div className={styles.normal}>
        <div className={styles.part}>
          <ProjectCardList />
        </div>
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ProjectPage);
