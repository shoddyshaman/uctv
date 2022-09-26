import Header from "./header";
import Meta from "./meta";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
