import "./css/Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="copyright">© Copyright JDPhoto S.A.S</div>
      <div className="social-links">
        <div className="social-item">
          <i className="fa-brands fa-whatsapp"></i>
          <span>31123456755</span>
        </div>
        <div className="social-item">
          <i className="fa-brands fa-instagram"></i>
          <span>jdphoto_col</span>
        </div>
        <div className="social-item">
          <i className="fa-brands fa-facebook"></i>
          <span>jdphoto_col</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer