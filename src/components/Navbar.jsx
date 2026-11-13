import { useState } from "react"; // 1. Importa useState
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./css/Navbar.css";
const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/"); 
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav>
          <Link className="logo" to="/">
            <img src="/public/img/image.png" alt="logo" />
            <h2>JDPhoto</h2>
          </Link>

          <div className="search-bar">
            <input type="text" placeholder="Buscar" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="user-menu">
            <p className="user-name">
              {user ? `Hola ${user.name}` : "Invitado"}
            </p>
            <div className="menu-icon" id="openSidebar" onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        id="sidebarOverlay"
        onClick={toggleMenu}
      ></div>
      <aside className={`sidebar ${isOpen ? "active" : ""}`} id="sidebar">
        <div className="sidebar-header">
          <h3>Menú</h3>

          <button
            className="close-btn"
            id="closeSidebar"
            onClick={toggleMenu}
          ></button>
        </div>
        <ul className="sidebar-menu" onClick={toggleMenu}>
          {user?.role?.toLowerCase() === "admin" && (
            <li>
              <Link to="/admin">Administración</Link>
            </li>
          )}
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
          <li>
            <Link href="/html/carrito.html">Carrito</Link>
          </li>
          <li>
            <Link to="/somos">Quienes somos</Link>
          </li>
        </ul>
        <ul className="sidebar-menu" onClick={toggleMenu}>
          <li>
            {!user ? (
              <Link to="/inicio">Inicio de sesión</Link>
            ) : (
              <Link onClick={handleLogout}>Cerrar sesión</Link>
            )}
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
