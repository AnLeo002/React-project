import { useState } from 'react'; // 1. Importa useState
import { Link } from 'react-router-dom';
const Navbar = () => {
  // Crea un estado para controlar si el menú está abierto (true) o cerrado (false)
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado entre verdadero y falso
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
          
          <div className="menu-icon" id="openSidebar" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>

      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        id="sidebarOverlay" 
        onClick={toggleMenu}
      ></div>
      <aside className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
        <div className="sidebar-header">
          <h3>Menú</h3>
          
          <button className="close-btn" id="closeSidebar" onClick={toggleMenu}></button>
        </div>
        <ul className="sidebar-menu">
          <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/catalogo"
            >Catálogo</Link
          >
        </li>
        <li>
          <Link href="/html/carrito.html"
            >Carrito</Link
          >
        </li>
        <li>
          <Link to="/somos"
            >Quienes somos</Link
          >
        </li>
        </ul>
         <ul className="sidebar-menu">
        <li>
          <Link href="/html/inicio.html">Inicio de sesión</Link>
        </li>
        <li>
          <Link href="/html/registro.html"
            >Registro</Link
          >
        </li>
      </ul>
      </aside>
    </>
  )
}

export default Navbar;