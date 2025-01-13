import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { searchService } from '../../../../services/searchService';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '../../../../hooks';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef();

  const debouncedValue = useDebounce(searchValue, 800);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const res = await searchService(debouncedValue);
      setSearchResult(res);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.startsWith(' ')) {
      return;
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
      appendTo={() => document.body}
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
