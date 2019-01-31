import React from 'react';
import { Menu, Row, Col } from 'antd';
import { Link } from 'dva/router';

import styles from './Header.css';
import icon from '../../assets/img/icon.png';

function Header({ location }) {
  const MenuItem = Menu.Item;
  return (
    <div className={styles.header}>
      <Row>
        <Col className={styles.title_wrapper} span={6}>
          <img alt="logo" className={styles.icon} src={icon} />
          <Link to="/" className={styles.title}>LilyStudio</Link>
        </Col>
        <Col span={18}>
          <Menu
            className={styles.menu}
            selectedKeys={[location.pathname]}
            mode="horizontal"
            theme="light"
          >
            <MenuItem key="/">
              <Link to="/">
                HOME
              </Link>
            </MenuItem>
            <MenuItem key="/record">
              <Link to="/record">
                RECORD
              </Link>
            </MenuItem>
            <MenuItem key="/project">
              <Link to="/project">
                PROJECT
              </Link>
            </MenuItem>
            <MenuItem key="/member">
              <Link to="/member">
                MEMBER
              </Link>
            </MenuItem>
            <MenuItem key="/salon">
              <Link to="/salon">
                SALON
              </Link>
            </MenuItem>
            <MenuItem key="/faq">
              <Link to="/faq">
                FAQ
              </Link>
            </MenuItem>
            <MenuItem key="/board">
              <Link to="/board">
                BOARD
              </Link>
            </MenuItem>
          </Menu>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
