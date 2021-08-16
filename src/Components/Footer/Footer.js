import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer green-back">
            <div className="container ">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <p className="logo"> EduPro </p>
                        <ul className="list-unstyled">
                            <li>Investir en soi</li>
                            <li>de chez vous</li>
                            <li className="social">

                            </li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col ">
                        <p className="titles"> Liens utiles </p>
                        <ul className="list-unstyled liens">
                            <li className="fas fa-city"> &nbsp; Accueil</li> <br />
                            <li className="fas fa-address-book"> &nbsp; Apropos</li> <br />
                            <li className="fas fa-landmark"> Universités</li> <br />
                            <li className="fas fa-comments"> &nbsp; Contact</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <p className="titles"> Contacter Nous </p>
                        <ul className="list-unstyled liens">
                            <li className=""> EduPro, Avenue de la </li>
                            <li className=""> Corniche, Monastir 5000</li>
                            <li className=""> Tunisie</li><br />
                            <li className=""> <strong>Phone:</strong>  +216 55 555 555</li>
                            <li className=""> <strong> Email:</strong>  hello@edupro.tn</li>
                        </ul>

                    </div>


                </div>

                <div className="row">
                    <hr />
                </div>

                <div className="row">
                    <p className="col-sm droit">
                        &copy;{new Date().getFullYear()} EduPro. Tous droits réservés.
                    </p>
                </div>

            </div>

        </div >
    )
}


export default Footer;