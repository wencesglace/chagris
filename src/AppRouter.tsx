import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Adopt from "./pages/adoption/Adoption";
import Contact from "./pages/contact/Contact";
import FAQ from "./pages/faq/FAQ";
import Links from "./pages/links/Links";
import QrRedirect from "./pages/qr/QrRedirect";

function AppLayout() {
  const location = useLocation();

  // 🔴 IMPORTANT : on ne rend RIEN pour /admin
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  // 🔗 Pages "invisibles" : pas de Header/Footer, accessibles uniquement par URL directe
  // (jamais liées depuis le menu — pensées pour un QR code sur le kakemono)
  if (
    location.pathname.startsWith("/links") ||
    location.pathname.startsWith("/qr")
  ) {
    return (
      <Routes>
        <Route path="/links" element={<Links />} />
        <Route path="/qr" element={<QrRedirect />} />
      </Routes>
    );
  }

  return (
    <>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
