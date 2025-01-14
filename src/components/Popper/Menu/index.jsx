import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const handleClickMenuItem = (isParent, item) => {
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    } else {
      onChange(item);
    }
  };

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return <MenuItem key={index} data={item} onClick={() => handleClickMenuItem(isParent, item)} />;
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 500]}
      hideOnClick={false}
      offset={[12, 12]}
      placement="bottom-end"
      onHidden={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

export default Menu;
