import "./css/Somos.css"
const Somos = () => {
  return (
    <>
    <section className="hero-about">
        <h1>Quienes somos</h1>
    </section>

    <main className="main-about">
        <div className="about-content">
            
            <div className="info-card-full">
                Lorem ipsum dolor sit amet consectetur adipiscing elit fames, primis morbi aliquet lacinia nunc ante leo est, eros vehicula in eget id rutrum enim. Vulputate vel habitant imperdiet laoreet sociis augue integer duis nec, nam nulla arcu turpis cum morbi lacus litora erat dignissim, tempus auctor torquent nostra phasellus primis himenaeos scelerisque. Consequat rhoncus tellus nam imperdiet eu vitae ac, dapibus magnis sociosqu himenaeos sem primis ornare ultricies, id nisl cubilia bibendum sed magna.
            </div>

            <div className="mission-card right">
                <div className="mission-img-box">
                    <img src="/img/image.png" alt="diafragma"/>
                </div>
                <div className="mission-text-box">
                    <h2>Misión</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit fames, primis morbi aliquet lacinia nunc ante leo est, eros vehicula in eget id rutrum enim. Vulputate vel habitant imperdiet laoreet sociis augue integer duis nec, nam nulla arcu turpis</p>
                </div>
            </div>

            <div className="vision-card left">
                <div className="vision-text-box">
                    <h2>Visión</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit fames, primis morbi aliquet lacinia nunc ante leo est, eros vehicula in eget id rutrum enim.</p>
                </div>
                <div className="vision-img-box">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80" alt="Instalaciones JDStudio"/>
                </div>
            </div>

        </div>
    </main>
    </>
  )
}

export default Somos