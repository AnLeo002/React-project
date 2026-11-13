import "./css/Card.css"
import { Link } from "react-router-dom"
const Card = ({nombre,precio,descripcion,img}) => {
  return (
    <div className="card">
            <img
              src={img}
              alt={nombre}
              className="card-img-service"
            />
            <h2 className="card-title">{nombre}</h2>
            <div className="card-price">Precio: {precio}</div>
            <div className="card-desc">{descripcion}</div>
            <Link to="/descripcion">
              <button className="btn-more">Ver Mas</button>
            </Link>
            
          </div>
  )
}

export default Card