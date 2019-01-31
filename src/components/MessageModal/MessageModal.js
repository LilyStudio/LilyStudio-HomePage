/**
 * Created by Hitigerzzz on 2017/6/18.
 */
import React from 'react';
import { Checkbox, Icon } from 'antd';
import styles from './MessageModal.css';

function MessageModal() {
  return (
    <div className={styles.message_modal}>
      <div>
        给小百合留言
        <button><Icon type="close" /></button>
      </div>
      <input placeholder="请留下你的邮箱" />
      <textarea placeholder="有什么想要说的呢？" />
      <div>
        <Checkbox />
        <span>不公开邮箱</span>
        <button>SUBMIT</button>
        <button>CANCEL</button>
      </div>
    </div>
  );
}

export default MessageModal;
