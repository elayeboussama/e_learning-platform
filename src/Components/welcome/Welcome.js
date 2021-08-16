import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './welcome.css';
//import { Jumbotron } from 'react-bootstrap';

function Welcome() {
    return (
        <div className=" bg-image">

            <div className="welcome-text Container">
                <h1>EduPro</h1>
                <p>
                    La facilité, l'efficacité
                </p>

            </div>

        </div>
    );
}

export default Welcome;

