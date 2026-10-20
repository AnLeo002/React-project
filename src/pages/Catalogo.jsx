import { productos, servicios } from "../constants"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Catalogo = () => {
  return (
    <>
    <Navbar></Navbar>
    <main className="catalog-container">
      <section>
        <h1 className="section-title">PRODUCTOS</h1>
        <div className="cards-grid">
          {productos.map(({nombre,precio,descripcion,img})=>(
            <Card nombre={nombre} precio={precio} descripcion={descripcion} img={img}/>
          ))}
        </div>
      </section>

      <section>
        <h1 className="section-title">SERVICIOS</h1>
        <div className="cards-grid">
          {servicios.map(({nombre,precio,descripcion,img})=>(
            <Card nombre={nombre} precio={precio} descripcion={descripcion} img={img}/>
          ))}
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
    
  )
}

export default Catalogo