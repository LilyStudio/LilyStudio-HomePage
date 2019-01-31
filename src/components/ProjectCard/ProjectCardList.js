/**
 * Created by Hitigerzzz on 2017/6/18.
 */
import React from 'react';
import { Row, Col } from 'antd';
import ProjectCard from './ProjectCard';
import styles from './ProjectCardList.css';

function MemberCardList() {
  // TODO
  const length = 8;
  const list = [];
  for (let i = 0; i < length; i += 1) {
    list.push(
      <Col span={8}>
        <ProjectCard className={styles.project_card} key={i} />
      </Col>,
    );
  }
  return (
    <Row gutter={20}>
      {list}
    </Row>
  );
}

export default MemberCardList;
