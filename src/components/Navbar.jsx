import { useState } from 'react'; // 1. Importa useState

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
          <div className="logo">
            <img src="/public/img/image.png" alt="logo" />
            <h2>JDPhoto</h2>
          </div>
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
          <a href="/index.html">Inicio</a>
        </li>
        <li>
          <a href="/html/catalogo.html"
            >Catálogo</a
          >
        </li>
        <li>
          <a href="/html/carrito.html"
            >Carrito</a
          >
        </li>
        <li>
          <a href="/html/somos.html"
            >Quienes somos</a
          >
        </li>
        </ul>
         <ul class="sidebar-menu">
        <li>
          <a href="/html/inicio.html">Inicio de sesión</a>
        </li>
        <li>
          <a href="/html/registro.html"
            >Registro</a
          >
        </li>
      </ul>
      </aside>
    </>
  );
};

export default Navbar;