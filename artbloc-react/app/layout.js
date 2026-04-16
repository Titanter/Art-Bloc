import "../styles/globals.css";

import Header from "../ui/nav-bar";
import Footer from "../ui/footer";

function Layout({ children }) {
  return (
    <html className="bg-[#f5ebd9]">
      <body>
        <div className="absolute top-0 z-1 flex w-screen h-24">
          <Header />
        </div>
        <div className="relative flex w-screen ">{children}</div>
        <div className="absolute bottom-0 w-screen flex h-60">
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default Layout;
