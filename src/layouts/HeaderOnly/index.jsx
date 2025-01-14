import Header from '../components/Header';

function HeaderLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default HeaderLayout;
