import { FC } from "react";
import { Layout as AntLayout } from "antd";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Gear } from "./pages/Gear";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { ROUTES } from "./configs/routes";
import "./styles.css";

const Layout: FC = () => {
  return (
    <AntLayout className="layout">
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.WORK} element={<Work />} />
        <Route path={ROUTES.GEAR} element={<Gear />} />
        <Route path={ROUTES.ABOUT_US} element={<About />} />
        <Route path={ROUTES.CONTACT_US} element={<Contact />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
      </Routes>
      <Footer />
    </AntLayout>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
