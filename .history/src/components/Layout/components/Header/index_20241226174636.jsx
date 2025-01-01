import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// 1. Thằng bind này nó giúp mình bind object style này vào -> và trả ra cái method cx -> dùng cx để làm việc với class thì sẽ viết được dấu gạch -
const cx = classNames.bind(styles);

function Header() {
  return <div>Header page</div>;
}

export default Header;
