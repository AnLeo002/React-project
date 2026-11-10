import {createContext, useContext, useState} from 'react';
import {apiFetch} from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    setLoading(true);

    try{
      const data = await apiFetch("/api/login",{
        method:"POST",
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      sessionStorage.setItem("token", data.token);
      setUser(data.usuario);

      return user;
    }catch(error){
      sessionStorage.removeItem("token");
      setUser(null);
      console.error("Error during login:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  const logout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
  }
  const recoverSession = async () => {
    const token = sessionStorage.getItem("token");
    if(!token){
      return;
    }
    setLoading(true);
    try{
      const profile = await apiFetch("/api/perfil");
      setUser(profile);
    } catch(error){
      sessionStorage.removeItem("token");
      setUser(null);
      console.error("Error during session recovery:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <AuthContext.Provider value={{user,loading,login,logout,recoverSession}}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth(){
  return useContext(AuthContext);
}