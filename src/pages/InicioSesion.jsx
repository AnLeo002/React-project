const InicioSesion = () => {
  return (
      <div className="login-container">
        <div className="login-bg-image"></div>

        <div className="login-form-wrapper">
          <div className="login-card">
            <h2>Inicio de sesión</h2>

            <form action="#" method="POST">
              <div className="form-group">
                <label for="cedula">Cédula</label>
                <input
                  type="text"
                  id="cedula"
                  placeholder="Número de cédula"
                  required
                />
              </div>
              <div className="form-group">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  required
                />
              </div>

              <button type="submit" className="btn-signin">
                Sign In
              </button>
            </form>

            <div className="account-link">
              <a href="#">Crear una cuenta</a>
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
