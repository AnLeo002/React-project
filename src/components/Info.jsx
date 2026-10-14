const Info = () => {
  return (
    <main class="main-content">
      <section class="info-section">
        <div class="info-card left">
          <div class="info-text">
            Sesiones fotograficas especiales, para momentos inolvidables
          </div>
          <img
            class="info-img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
            alt="Sesión Fotográfica"
          />
        </div>

        <div class="info-card right">
          <div class="info-text">Transmite sensaciones solo con una imagen</div>
          <img
            class="info-img"
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=500&q=80"
            alt="Auto en Pista"
          />
        </div>
      </section>

      <section class="services">
        <h2 class="section-title">Que ofrecemos</h2>
        <div class="services-grid">
          <div class="service-card">
            <img src="/public/img/camara-de-fotos(1).png" alt="camara " />
            <p>Fotografías para cualquier ocasión</p>
          </div>
          <div class="service-card">
            <img src="/public/img/solicitud-de-cotizacion.png" alt="" />
            <p>Cotiza tu sesión fotográfica</p>
          </div>
          <div class="service-card">
            <img src="/public/img/camara.png" alt=""/>
            <p>Videos profesionales</p>
          </div>
          <div class="service-card">
            <img src="/public/img/asesoramiento.png" alt=""/>
            <p>Asesoría personalizada</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-title">Cotiza con nuestros planes</h2>
        <div class="quote-container">
          <div class="aperture-icon">
            <img src="/public/img/diafragma.png" alt="logo" />
          </div>
          <form class="quote-form">
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
  )
}

export default Info