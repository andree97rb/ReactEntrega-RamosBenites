import Logo from '../../assets/img/logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4 className="mb-4">Síguenos en redes sociales</h4>
                        <ul className="list-unstyled d-flex justify-content-start mb-0">
                            <li className="me-3">
                                <a href="#!"><FaFacebook className="fs-3 text-white" /></a>
                            </li>
                            <li className="me-3">
                                <a href="#!"><FaInstagram className="fs-3 text-white" /></a>
                            </li>
                            <li className="me-3">
                                <a href="#!"><FaTwitter className="fs-3 text-white" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4 className="mb-4">Contáctanos</h4>
                        <ul className="list-unstyled">
                            <li className="mb-3"><FaEnvelope className="me-2" />contacto@royalcomerce.com</li>
                            <li className="mb-3"><FaPhoneAlt className="me-2" />+51 996478263</li>
                            <li className="mb-0"><FaMapMarkerAlt className="me-2" />5632 Av. miAvenida, Lima, Perú</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="mb-4">Acerca de nosotros</h4>
                        <p className="mb-0">RoyalCommerce es una empresa dedicada a la venta de computadoras y accesorios gamers de alta calidad. Nuestro enfoque es ayudar a los programadores y gamers a mejorar su setup para que puedan disfrutar de una experiencia de primer nivel.</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
                        <p className="mb-0">© {new Date().getFullYear()} RoyalComerce</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <img src={Logo} alt="MiEmpresa" className="img-fluid" width="50" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
