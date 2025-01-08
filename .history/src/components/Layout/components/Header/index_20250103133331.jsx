import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '../../../../assets/images';

// 1. Thằng bind này nó giúp mình bind object style này vào -> và trả ra cái method cx -> dùng cx để làm việc với class thì sẽ viết được dấu gạch -
// 2. Cứ thằng nào là thẻ ôm của 1 component thì cứ đặt tên nó là wrapper
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <a href="/" className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </a>

        {/* Search */}
        <div className={cx('search')}>
          <form action="" className={cx('search-form')}>
            <input type="text" placeholder="Tìm kiếm" />
            <button type="button" className={cx('search-clear')}>
              {/* Clear */}
            </button>
            <button type="button" className={cx('search-loading')}>
              {/* Loading */}
            </button>
            <button type="button" className={cx('search-btn')}>
              {/* Search */}
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
