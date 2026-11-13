import "./css/Registro.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api";
import MessageModal  from "../components/MessageModal";

const Registro = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [error,setError] = useState(false)
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      await apiFetch("/api/registro", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          email: email,
          username: username,
          password: password,
        }),
      });
      setMessageModalOpen(true);
      setMessage("Usuario registrado correctamente");
      setError(false);
      setTimeout(() => {
        navigate("/inicio");
      }, 2000);
    } catch (error) {
      setMessage(error.message);
      setMessageModalOpen(true);
      setError(true);
    }
  };
  return (
    <div className="register-container">
      <MessageModal
            isOpen={messageModalOpen}
            message={message}
            error={error}
            onClose={() => setMessageModalOpen(false)}
          />
      <div className="register-form-wrapper">
        <div className="register-card">
          <h2>Crear una cuenta</h2>

          <form onSubmit={signupHandler} method="POST">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Apellido</label>
              <input
                type="text"
                id="lastname"
                placeholder="Apellido"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                id="username"
                placeholder="Nombre de usuario"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-register">
              Registrarse
            </button>
          </form>
          <div className="login-link">
            <Link to="/inicio">Iniciar sesión</Link>
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
        </div>
      </div>
    </div>
  );
};

export default Registro;
