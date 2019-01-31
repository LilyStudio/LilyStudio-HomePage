/**
 * Created by wyj on 2017/6/18.
 */
import React from 'react';

import styles from './RecordCard.css';
import recordCard from '../../assets/img/RecordCard/record-card.png';

function RecordCard({ className }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.img_wrapper}>
        <img alt="record" src={recordCard} />
      </div>
      <div className={styles.date}>
        <div>18</div>
        <div>MAY</div>
      </div>
      <div className={styles.recordContent}>
        <div>财务记录</div>
        <div>2017.03.23，收到了生科发的9600，结束了一年左右没有进账的日子_(:зゝ∠)_
          因为新建支付宝账号需要身份认证/企业认证不方便，并且账号也不好传给别人，所以还是选择单人管钱。</div>
      </div>
    </div>
  );
}

export default RecordCard;
