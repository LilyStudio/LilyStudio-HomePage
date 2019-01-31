import React from 'react';

import styles from './ProjectInfo.css';
import head from '../../assets/img/Project/projectinfo.png';

function ProjectInfo() {
  return (
    <div className={styles.project_info}>
      <div className={styles.img_wrapper}>
        <img alt="Project Information" src={head} />
      </div>
      <div className={styles.project_introdution}>
        <div>米课MiCourse 3.0</div>
        <div>May 2017</div>
        <div>原由米课团队开发运营</div>
        <div>参与人员：陈灿海、张馨中、蔡沛程、李向阳 等等</div>
      </div>
    </div>
  );
}

export default ProjectInfo;
