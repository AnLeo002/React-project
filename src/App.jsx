//import Home from "./components/Home"
import Catalogo from "./pages/Catalogo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Somos from "./pages/Somos";
import Descripcion from "./pages/Descripcion";
const App = () => {
  return (
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/somos" element={<Somos/>}/>
          <Route path="/descripcion" element={<Descripcion/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  );
};

export default App;
