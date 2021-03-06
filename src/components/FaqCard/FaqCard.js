/**
 * Created by wyj on 2017/6/18.
 */
import React from 'react';

import styles from './FaqCard.css';

function FaqCard({ className }) {
  return (
    <div className={`${styles.faqCard} ${className}`}>
      <div>
        <span>Q:</span>
        <div>你们和小百合 BBS 是什么关系？</div>
      </div>
      <div>
        <span>A:</span>
        <div>小百合 BBS 的创建者和最初的维护者，建立了最初的小百合工作室。后来在05年，高校论坛必须实名制，之后小百合 BBS便移交给了学校党委的宣传部管理。从此论坛和工作室除了历史上的渊源外，并没有其他的直接联系了。
          <br />附：维基百科 — 南京大学小百合 BBS</div>
      </div>
    </div>
  );
}

export default FaqCard;
