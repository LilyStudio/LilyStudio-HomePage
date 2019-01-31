/**
 * Created by wyj on 2017/6/18.
 */
import React from 'react';

import styles from './RecordInfo.css';
import record from '../../assets/img/RecordInfo/record.png';
import memberPic from '../../assets/img/RecordInfo/member-pic.png';

function RecordInfo() {
  return (
    <div className={styles.recordInfo}>
      <div className={styles.img_wrapper}>
        <img alt="record" src={record} />
      </div>
      <div className={styles.contentSection}>
        <img alt="member" src={memberPic} />
        <div className={styles.recordContent}>
          <div>
            <span className={styles.contentName}>财务记录</span>
            <span>
              Added by <span className={styles.highlight}>张馨中</span>,last edited
              by <span className={styles.highlight}>张馨中</span> on <span>Mar 23, 2017</span>
            </span>
          </div>
          <div>
            <table>
              <tr>
                <th>日期</th>
                <th>事项</th>
                <th>增减</th>
                <th>结果</th>
              </tr>
              <tr>
                <td>2017.03.23</td>
                <td>之前的遗留款</td>
                <td> </td>
                <td>121.7</td>
              </tr>
              <tr>
                <td>2017.03.23</td>
                <td>生科结账</td>
                <td>+9600</td>
                <td>9600</td>
              </tr>
            </table>
          </div>
          <div>
            <div>馨中:</div>
            <div>2017.03.23，收到了生科发的9600</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordInfo;
