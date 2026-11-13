import "./css/InicioSesion.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MessageModal from "../components/MessageModal";

const InicioSesion = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const loggedUser = await login(username, password);
      const role = loggedUser?.role?.toLowerCase()?.trim();

      navigate(role === "admin" ? "/admin" : "/");
    } catch (error) {
      setMessage(error.message);
      setMessageModalOpen(true);
      setError(true);
    }
  };
  return (
    <div className="login-container">
      <MessageModal
        isOpen={messageModalOpen}
        message={message}
        error={error}
        onClose={() => setMessageModalOpen(false)}
      />
      <div className="login-form-wrapper">
        <div className="login-card">
          <h2>Inicio de sesión</h2>

          <form onSubmit={loginHandler} method="POST">
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nombre de usuario"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
              />
            </div>

            <button type="submit" className="btn-signin" disabled={loading}>
              {loading ? "Ingresando..." : "Iniciar sesión"}
            </button>
          </form>

          <div className="account-link">
            <Link to="/registro">Crear una cuenta</Link>
          </div>

          <div className="divider">
            <span>o</span>
          </div>

          <p className="social-text">Iniciar sesión con:</p>
          <div className="social-buttons">
            <button className="btn-social google">
              Google <i className="fa-brands fa-google"></i>
            </button>
            <button className="btn-social facebook">
              Facebook <i className="fa-brands fa-facebook-f"></i>
            </button>
          </div>
          <div className="recovery-link">
            <a href="#">Recuperar contraseña</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;
