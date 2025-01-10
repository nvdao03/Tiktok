import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1be015feb10a86a0177f048001bd0469~c5_100x100.jpeg?lk3s=30310797&nonce=15317&refresh_token=66705073abf8410ab80e2fd3d5b10936&x-expires=1735992000&x-signature=0UfE0BNkbiXxWny8Wc1fAKic2%2FM%3D&shp=30310797&shcp=-"
        alt="Hoa"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>Hoa Hậu Quốc Gia</span>
      </div>
    </div>
  );
}

export default AccountItem;
