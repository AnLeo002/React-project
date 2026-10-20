
const Home = () => {
  return (
    <>
    <div className="carrusel-css">
      <div className="carrusel-track">
        
        <div className="slide">
          <img src="/public/img/carrusel.jpg" alt="Imagen 1" />
          <div className="caption">Sesiones Fotográficas Especiales</div>
        </div>
        
        <div className="slide">
          <img src="/public/img/porschegt3.jpg" alt="Imagen 2" />
          <div className="caption">Porsche GT3</div>
        </div>
        
        <div className="slide">
          <img src="/public/img/charco2.jpg" alt="Imagen 3" />
          <div className="caption">Momentos Inolvidables</div>
        </div>
      </div>
    </div>
    <main className="main-content">
      <section className="info-section">
        <div className="info-card left">
          <div className="info-text">
            Sesiones fotograficas especiales, para momentos inolvidables
          </div>
          <img
            className="info-img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
            alt="Sesión Fotográfica"
          />
        </div>

        <div className="info-card right">
          <div className="info-text">Transmite sensaciones solo con una imagen</div>
          <img
            className="info-img"
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=500&q=80"
            alt="Auto en Pista"
          />
        </div>
      </section>
      <section className="services">
        <h2 className="section-title">Que ofrecemos</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/public/img/camara-de-fotos(1).png" alt="camara " />
            <p>Fotografías para cualquier ocasión</p>
          </div>
          <div className="service-card">
            <img src="/public/img/solicitud-de-cotizacion.png" alt="" />
            <p>Cotiza tu sesión fotográfica</p>
          </div>
          <div className="service-card">
            <img src="/public/img/camara.png" alt=""/>
            <p>Videos profesionales</p>
          </div>
          <div className="service-card">
            <img src="/public/img/asesoramiento.png" alt=""/>
            <p>Asesoría personalizada</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Cotiza con nuestros planes</h2>
        <div className="quote-container">
          <div className="aperture-icon">
            <img src="/public/img/diafragma.png" alt="logo" />
          </div>
          <form className="quote-form">
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Apellido" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="tel" placeholder="Teléfono de contacto" />
            <textarea placeholder="Comentario"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home