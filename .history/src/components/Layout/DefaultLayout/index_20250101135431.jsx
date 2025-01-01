import Sidebar from './Sidebar';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;
