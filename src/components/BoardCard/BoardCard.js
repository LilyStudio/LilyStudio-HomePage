/**
 * Created by wyj on 2017/6/18.
 */
import React from 'react';

import styles from './BoardCard.css';
import comment from '../../assets/img/BoardCard/comment.png';

function BoardCard() {
  return (
    <div className={styles.board_card}>
      <img alt="comment" src={comment} />
      <div className={styles.board_content}>
        <div className={styles.post_info}>
          <span>xxx@example.com</span>
          <span>2017-06-17</span>
        </div>
        <div>
          小百合 BBS 的创建者和最初的维护者，建立了最初的小百合工作室。后来在05年，高校论坛必须实名制，之后小百合 BBS便移交给了学校党
          委的宣传部管理。从此论坛和工作室除了历史上的渊源外，并没有其他的直接联系了。
          <br />附：维基百科 — 南京大学小百合 BBS
        </div>
        <div className={styles.comment_content}>
          <span>LilyStudio</span>
          <span>2017-05-17</span>
          <div>谢谢你的夸奖</div>
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
