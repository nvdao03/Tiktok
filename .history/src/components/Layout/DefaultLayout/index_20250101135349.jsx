import Sidebar from './Sidebar';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;
