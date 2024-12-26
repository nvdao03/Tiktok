import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main className="content"></main>
      </div>
    </div>
  );
}

export default DefaultLayout;
