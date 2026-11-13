import "./css/Loading.css";

export const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p className="loading-text">Cargando...</p>
    </div>
  );
};