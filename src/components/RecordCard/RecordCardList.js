/**
 * Created by wyj on 2017/6/18.
 */
import React from 'react';
import { Row, Col } from 'antd';
import RecordCard from './RecordCard';

import styles from './RecordCardList.css';

function RecordCardList() {
  const length = 10;
  const list = [];
  for (let i = 0; i < length; i += 1) {
    list.push(
      <Col span={8}>
        <RecordCard className={styles.record_card} />
      </Col>,
    );
  }
  return (
    <Row gutter={20}>
      {list}
    </Row>
  );
}

export default RecordCardList;
