/**
 * Created by wyj on 2017/6/18.
 */
import React from 'react';
import FaqCard from './FaqCard';

import styles from './FaqCardList.css';

function FaqCardList() {
  const length = 7;
  const list = [];
  for (let i = 0; i < length; i += 1) {
    list.push(
      <FaqCard className={styles.faq_card} />,
    );
  }
  return (
    <div>
      {list}
    </div>
  );
}

export default FaqCardList;
