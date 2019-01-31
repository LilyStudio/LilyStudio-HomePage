/**
 * Created by Hitigerzzz on 2017/6/18.
 */
import React from 'react';

import styles from './MemberCard.css';
import head from '../../assets/img/Member/temp.png';

function MemberCard({ className }) {
  return (
    <div className={`${styles.member_card} ${className}`}>
      <div className={styles.img_wrapper}>
        <img alt="成员头像" src={head} />
      </div>
      <div className={styles.tag}>
        <p>Sep</p>
        <p>2015</p>
      </div>
      <div className={styles.member_introdution}>
        <div>张馨中</div>
        <p>软件工程</p>
        <p>策划组组长</p>
      </div>
    </div>
  );
}

export default MemberCard;
