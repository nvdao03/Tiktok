import Header from './Header';
import Sidebar from './Sidebar';

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
