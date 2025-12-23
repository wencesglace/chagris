import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Adopt from "./pages/adoption/Adoption";
import Contact from "./pages/contact/Contact";

function AppLayout() {
  const location = useLocation();

  // 🔴 IMPORTANT : on ne rend RIEN pour /admin
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
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
