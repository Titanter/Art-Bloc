//import "../styles/globals.css";

import Header from "../ui/nav-bar";
import Footer from "../ui/footer";

function Layout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
