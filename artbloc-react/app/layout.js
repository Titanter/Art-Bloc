import "../styles/globals.css";

import Header from "../ui/nav-bar";
import Footer from "../ui/footer";

function Layout({ children }) {
  return (
    <html className="bg-[#f5ebd9]">
      <body>
        <div className="fixed top-0 z-100 flex w-screen flex-row h-1/10 border">
          <Header />
        </div>
        <div className="relative flex w-screen flex-row ">{children}</div>
        <div className="fixed bottom-0 flex w-screen flex-row h-60 border">
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default Layout;
