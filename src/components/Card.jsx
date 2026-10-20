import { Link } from "react-router-dom"
const Card = ({nombre,precio,descripcion,img}) => {
  return (
    <div class="card">
            <img
              src={img}
              alt={nombre}
              class="card-img-service"
            />
            <h2 class="card-title">{nombre}</h2>
            <div class="card-price">Precio: {precio}</div>
            <div class="card-desc">{descripcion}</div>
            <Link to="/descripcion">
              <button class="btn-more">Ver Mas</button>
            </Link>
            
          </div>
  )
}

export default Card