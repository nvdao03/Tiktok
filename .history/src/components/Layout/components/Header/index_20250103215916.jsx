import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Buttons';

// 1. Thằng bind này nó giúp mình bind object style này vào -> và trả ra cái method cx -> dùng cx để làm việc với class thì sẽ viết được dấu gạch -
// 2. Cứ thằng nào là thẻ ôm của 1 component thì cứ đặt tên nó là wrapper
const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <a href="/" className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </a>

        {/* Search */}
        <Tippy
          visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Tài khoản</h4>
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <form action="" className={cx('search-form')}>
              <input type="text" placeholder="Tìm kiếm" />
              <button type="button" className={cx('search-clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />

              <button type="button" className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </Tippy>
        {/* Actions */}
        <div className={cx('actions')}>
          <Button outline small>
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
