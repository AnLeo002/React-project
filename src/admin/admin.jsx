import {useEffect,useState} from "react";
import {apiFetch} from "../services/api";
import "./css/admin.css"
function Admin(){
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message,setMessage] = useState("");

  useEffect(()=>{
    const  fetchUsers = async () => {
      try{
        const data = await apiFetch("/api/usuarios");
        setUsers(data.users)
      }catch(error){
        setMessage(error.message || "Error al obtener los usuarios");
      }finally{
        setLoading(false);
      } 
    }
    fetchUsers();
  },[]);

  if(loading){
    return <div>Cargando...</div>
  }

  return (
    <section className="admin-container">
      <div className="admin-info">
        <h1>Panel de administración</h1>
      {message && <div className="error-message">{message}</div>}
      <hr />
      </div>
      <table>
        <thead >
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Nombre de usuario</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

  )
}
export default Admin;