import React from 'react';
import {connect} from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import BoardCard from '../components/BoardCard/BoardCard';
import MessageModal from '../components/MessageModal/MessageModal';

import styles from './Page.css';

import bg from '../assets/img/bg-board.png';

function BoardPage({list}) {

  return (
    <MainLayout
      bgImage={bg}
      title="BOARD"
      intro="Most questions we have been asked."
    >
      <div className={styles.normal}>

        <div className={styles.part}>
          <BoardCard />
        </div>

        <MessageModal />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(BoardPage);
