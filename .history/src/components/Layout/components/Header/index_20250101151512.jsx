import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// 1. Thằng bind này nó giúp mình bind object style này vào -> và trả ra cái method cx -> dùng cx để làm việc với class thì sẽ viết được dấu gạch -
// 2. Cứ thằng nào là thẻ ôm của 1 component thì cứ đặt tên nó là wrapper
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <a href="" className={cx('logo')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="118" height="42" fill="currentColor" alt="TikTok">
            <use xlink:href="#logo-dark-c4561408"></use>
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
