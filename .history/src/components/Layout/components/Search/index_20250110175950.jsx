import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      });
  }, [searchValue]);

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;

    // Nếu nhập vào chỉ có 1 kí tự - Thực hiện xoá khoảng trấng 2 bên - Kiểm tra nếu kí tự nhập vào là khoảng trấng thì không cho phép nhập nữa
    if (inputValue.length === 1) {
      if (inputValue.trim() === '') {
        return;
      }
    }

    setSearchValue(inputValue);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    searchRef.current.focus();
  };

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive={true}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={() => setShowResult(false)}
    >
      <div className={cx('search')}>
        <form className={cx('search-form')}>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
            value={searchValue}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {searchValue.length > 0 && !loading && (
            <button type="button" className={cx('search-clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />}
          <button type="button" className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
