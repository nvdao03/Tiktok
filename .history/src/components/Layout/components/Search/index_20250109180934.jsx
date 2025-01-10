import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  console.log(searchValue);

  return (
    <HeadlessTippy
      visible={searchValue.length > 0}
      interactive={true}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <form action="" className={cx('search-form')}>
          <input type="text" placeholder="Search" onChange={handleSearchChange} value={searchValue} />
          {searchValue.length > 0 ? (
            <button type="button" className={cx('search-clear')} onClick={}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          ) : (
            <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />
          )}

          <button type="button" className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
