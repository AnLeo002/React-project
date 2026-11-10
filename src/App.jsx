import {useEffect} from "react";
import Catalogo from "./pages/Catalogo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import Somos from "./pages/Somos";
import Descripcion from "./pages/Descripcion";
import InicioSesion from "./pages/InicioSesion";  
import Registro from "./pages/Registro";
import Admin from "./admin/admin";
import ProtectRoute from "./components/ProtectRoute";
import {AuthProvider, useAuth } from "./context/AuthContext";

const Layout = () => {
  const {loading, recoverSession} = useAuth();
  const location = useLocation();
  const rutasSinFooter = ["/inicio", "/registro"];
  const ocultarFooter = rutasSinFooter.includes(location.pathname);

  useEffect(() => {
    recoverSession();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Cargando...
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/somos" element={<Somos />} />
        <Route path="/descripcion" element={<Descripcion />} />
        <Route path="/inicio" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />

        <Route element={<ProtectRoute onlyAdmin={true} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      {!ocultarFooter && <Footer />}
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
