import {Navigate,Outlet} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function ProtectRoute({onlyAdmin=false}){
  const {user,loading} = useAuth();

  if(loading){
    return (<div className="flex justify-center items-center h-screen">
      Verificando sesión...
      </div>
      );
  }
  if(!user){
    return <Navigate to="/inicio" replace/>
  }
  if(onlyAdmin && user.rol !== "admin"){
    return <Navigate to="/" replace/>
  }

  return <Outlet/>
}
export default ProtectRoute;