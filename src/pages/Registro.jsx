import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api";
const Registro = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [menssage, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    setMessage("");
    console.log(name, lastname, email, username, password);
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

      setMessageType("success");
      setMessage("Usuario registrado correctamente");

      setTimeout(() => {
        navigate("/inicio");
      }, 2000);
    } catch (error) {
      setMessageType("error");
      setMessage(error.message || "Error al iniciar sesión");
    }
  };
  return (
    <div class="register-container">
      <div class="register-bg-image"></div>
      <div class="register-form-wrapper">
        <div class="register-card">
          <h2>Crear una cuenta</h2>

          <form onSubmit={signupHandler} method="POST">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" placeholder="Nombre" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="lastname">Apellido</label>
              <input
                type="text"
                id="lastname"
                placeholder="Apellido"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="username">Nombre de usuario</label>
              <input
                type="text"
                id="username"
                placeholder="Nombre de usuario"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>

            <button type="submit" class="btn-register">
              Registrarse
            </button>
          </form>
          <p>{menssage && (
            <div className={`message ${messageType}`}>
              {menssage}
            </div>
          )}</p>
          

          <div class="login-link">
            <Link to="/inicio">Iniciar sesión</Link>
          </div>

          <div class="divider">
            <span>o</span>
          </div>

          <p class="social-text">Iniciar sesión con:</p>
          <div class="social-buttons">
            <button class="btn-social google">
              Google <i class="fa-brands fa-google"></i>
            </button>
            <button class="btn-social facebook">
              Facebook <i class="fa-brands fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
