/**
 * Created by Hitigerzzz on 2017/6/18.
 */
import React from 'react';

import styles from './SalonCard.css';
import user from '../../assets/img/Salon/user.png';
import link from '../../assets/img/Salon/link.png';

function SalonCard({ className }) {
  return (
    <div className={`${styles.salon_card} ${className}`}>
      <div className={styles.img_wrapper}>
        <img alt="user" src={user} />
      </div>
      <div className={styles.salon_desc}>
        <span>李思聪</span>
        <span>May 14,2017</span>
        <p>今天的沙龙是李思聪带来的JavaScript中有趣的代码混淆~
            <br />看完整个人都颜文字了(≧ω≦)/</p>
        <div className={styles.salon_link}>
          <div className={styles.img_link_wrapper}>
            <img alt="link" src={link} />
          </div>
          <a href="">slide~Javascript中一些有趣的.pptx</a>
        </div>
      </div>
    </div>
  );
}

export default SalonCard;
