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
  faArrowUpFromBracket,
  faUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Buttons';
import Menu from '../../../Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

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

  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Xem hồ sơ',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faTiktok} />,
      title: 'Nhận xu',
      to: '/tiktok',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
      to: '/setting',
    },
    ...MENU_ITEMS,
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <a href="/" className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </a>

        {/* Search */}
        <HeadlessTippy
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
        </HeadlessTippy>

        {/* Actions */}
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <div className={cx('current-user')}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </button>
                <Tippy content="Hộp thư" placement="bottom-end" delay={[0, 200]}>
                  <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faMessage} />
                  </button>
                </Tippy>
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

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a7309a64c7b74183cef7285d16038a50.jpeg?lk3s=a5d48078&nonce=14777&refresh_token=b9c9c4e56da4de1b71487051c842858a&x-expires=1736413200&x-signature=FepoaF2HX5dqJZEPRdOhSRi0FwE%3D&shp=a5d48078&shcp=81f88b70"
                alt="Nguyen Van A"
              />
            ) : (
              <>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
