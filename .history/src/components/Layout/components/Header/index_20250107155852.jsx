import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faHouseLaptop,
  faCircleQuestion,
  faMoon,
  faCloudUpload,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Buttons';
import Menu from '../../../Popper/Menu';

// 1. Thằng bind này nó giúp mình bind object style này vào -> và trả ra cái method cx -> dùng cx để làm việc với class thì sẽ viết được dấu gạch -
// 2. Cứ thằng nào là thẻ ôm của 1 component thì cứ đặt tên nó là wrapper
const cx = classNames.bind(styles);

// 3. Nội dung ở trong Menu sẽ thay đổi theo nhiều kiểu -> mình sẽ ko để cứng mà truyền data và render ra màn hình
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faHouseLaptop} />,
    title: 'Công cụ dành cho nhà sáng tạo',
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'fi',
          title: 'Finnish',
        },
        {
          type: 'language',
          code: 'no',
          title: 'Norwegian',
        },
        {
          type: 'language',
          code: 'se',
          title: 'Swedish',
        },
        {
          type: 'language',
          code: 'dk',
          title: 'Danish',
        },
        {
          type: 'language',
          code: 'ch',
          title: 'Swiss German',
        },
        {
          type: 'language',
          code: 'nl',
          title: 'Dutch',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Chế độ tối',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  }, []);

  const handleMenuChange = (menuItems) => {
    console.log(menuItems);
  };

  const currentUser = false;

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
          {currentUser ? (
            <>
              <div className={cx('current-user')}>
                <button>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </div>
            </>
          ) : (
            <>
              {/* <Button text>Đăng ký</Button> */}
              <Button primary className={cx('custom-primary')}>
                Đăng nhập
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
