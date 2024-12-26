import Header from './Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default DefaultLayout;
