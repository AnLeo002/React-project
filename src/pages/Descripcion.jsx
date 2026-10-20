import { productos } from "../constants";
import Card from "../components/Card";
const Descripcion = () => {
  return (
    <main className="main-container">
      <section className="product-detail-section">
        <div className="product-main-card">
          <img
            src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=300&q=80"
            alt="Canon EF - S"
            className="product-detail-img"
          />
          <div className="product-info-content">
            <h1 className="product-title">Canon EF - S</h1>
            <p className="product-subtitle">Nuevo | 18-55 mm| Lente</p>

            <div className="box-content-title">Contenido de la caja</div>
            <ul className="box-content-list">
              <li>1 Canon EF-S 18-55 mm f/4-5.6 IS STM</li>
              <li>1 tapa de objetivo EF-S 18-55 mm f/4-5.6 IS STM</li>
            </ul>
          </div>
        </div>

        <div className="purchase-card">
          <div className="product-price-large">$ 1.000.000</div>
          <button className="btn-add-cart">Añadir al carrito</button>
        </div>
      </section>

      <section className="description-section">
        <div className="description-card">
          <h3>Descripción:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit fames, primis
            morbi aliquet lacinia nunc ante leo est, eros vehicula in eget id
            rutrum enim. Vulputate vel habitant imperdiet laoreet sociis augue
            integer duis nec, nam nulla arcu
          </p>
        </div>
      </section>

      <section>
        <h2 className="recommendations-title">
          Artículos que te podrían interesar
        </h2>
        <div className="products-grid">
            {productos.map(({ nombre, precio, descripcion, img }) => (
              <Card className="product-card"
                nombre={nombre}
                precio={precio}
                descripcion={descripcion}
                img={img}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Descripcion;
