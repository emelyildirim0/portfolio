import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ lang, setLang, t }) {
  return (
    <div className="app-shell">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default Layout;

