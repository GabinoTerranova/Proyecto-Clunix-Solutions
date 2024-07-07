import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Soporte Técnico</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Servicios <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reservas</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

function Services() {
    return (
        <section id="services">
            <h2>Servicios de Soporte Técnico</h2>
            <ul>
                <li>Instalación de software</li>
                <li>Configuración de hardware</li>
                <li>Resolución de problemas técnicos</li>
            </ul>
        </section>
    );
}

function Reservations() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section id="reservations">
            <h2>Reservas</h2>
            <div className="calendly-inline-widget" data-url="https://calendly.com/quick_tech/visit?hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
        </section>
    );
}

function Ads() {
    return (
        <section id="ads">
            <div>
                {/* Aquí puedes agregar contenido de anuncios */}
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 Clunix Solutions</p>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <Services />
                <Reservations />
                <Ads />
            </main>
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
