import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="/">BeautyShop <span>Manager</span></a>
        <span className="environment">Entorno de desarrollo</span>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        BeautyShop Manager · Base técnica inicial
      </footer>
    </div>
  );
}
