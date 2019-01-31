/**
 * Created by Hitigerzzz on 2017/6/18.
 */
import React from 'react';

import styles from './ProjectCard.css';
import project from '../../assets/img/Project/project.png';

function ProjectCard({ className }) {
  return (
    <div className={`${styles.project_card} ${className}`}>
      <div className={styles.img_wrapper}>
        <img alt="项目" src={project} />
      </div>
      <div className={styles.tag}>
        <p>May</p>
        <p>2016</p>
      </div>
      <div className={styles.project_introdution}>
        <p>米课MiCourse 3.0</p>
      </div>
    </div>
  );
}

export default ProjectCard;
