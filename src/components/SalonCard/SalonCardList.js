/**
 * Created by wyj on 2017/6/18.
 */
import React from 'react';
import SalonCard from './SalonCard';

import styles from './SalonCardList.css';

function SalonCardList() {
  const length = 4;
  const list = [];
  for (let i = 0; i < length; i += 1) {
    list.push(
      <SalonCard className={styles.salon_card} />,
    );
  }
  return (
    <div>
      {list}
    </div>
  );
}

export default SalonCardList;
