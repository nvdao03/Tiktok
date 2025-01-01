import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h1>Sidebar Page</h1>
    </aside>
  );
}

export default Sidebar;
