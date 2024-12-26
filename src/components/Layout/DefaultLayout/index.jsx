import Sidebar from './Sidebar';
import Header from '../components/Header';

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
