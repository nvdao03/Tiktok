import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import routesConfig from '../../../../config/routes';
import images from '../../../../assets/images';
import Button from '../../../Buttons';
import Menu from '../../../Popper/Menu';
import {
  CoinsIcon,
  CreatorToolsIcon,
  FeedbackIcon,
  LanguageIcon,
  LightModeIcon,
  LogoutIcon,
  MessageIcon,
  ProfileIcon,
  SettingIcon,
  UploadIcon,
} from '../../../Icons';
import Image from '../../../Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <CreatorToolsIcon />,
    title: 'Creator tools',
  },
  {
    icon: <LanguageIcon />,
    title: 'Language',
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
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <LightModeIcon />,
    title: 'Light mode',
  },
];

const userMenu = [
  {
    icon: <ProfileIcon />,
    title: 'View profile',
    to: '/profile',
  },
  {
    icon: <CoinsIcon />,
    title: 'Get coins',
    to: '/tiktok',
  },
  {
    icon: <SettingIcon />,
    title: 'Settings',
    to: '/setting',
  },
  ...MENU_ITEMS,
  {
    icon: <LogoutIcon />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItems) => {
    console.log(menuItems);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <Link to={routesConfig.home} className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </Link>

        {/* Search */}
        <Search />

        {/* Actions */}
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <div className={cx('current-user')}>
                <a href="/upload" className={cx('action-upload')}>
                  <UploadIcon />
                  <span className={cx('action-upload__title')}>Upload</span>
                </a>
                <Tippy content="Mailbox" placement="bottom-end" delay={[0, 200]}>
                  <button className={cx('action-btn')}>
                    <MessageIcon />
                  </button>
                </Tippy>
              </div>
            </>
          ) : (
            <>
              <Button primary className={cx('custom-primary')}>
                Login
              </Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
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
