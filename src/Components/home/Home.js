import back from '../../img/back.svg';
import './Home.css';
import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

//import Navbar from '../Navbar/Navbar.js';
import Navbar from '../Navbar/Navbar.js';
import Welcome from '../welcome/Welcome.js';
import Contact from '../contact/Contact.js';
import Login from '../lognIn/';
import Signup from '../signup/SignUp.js';
import Footer from '../Footer/Footer.js';
import Forgot from '../Forgot/Forgot.js';
import { Universities } from '../Universities/Universities.js'
import Apropos from '../apropos/Apropos.js';
import Confirme from '../Confirme/Confirme.js';


const Home = () => {
    const [signisopen, setsignisopen] = useState(false);
    const [logisopen, setlogisopen] = useState(false);
    const [forgotisopen, setforgotisopen] = useState(false);
    const [confisopen, setconfisopen] = useState(false);
    return (
        <div className="App" >
            <Router>
                <Route path="/">

                    <div className="backimg">
                        <img src={back} alt="" className="back" />
                    </div>
                    <Navbar setsignisopen={setsignisopen} setlogisopen={setlogisopen} />
                    <Welcome />
                    <Apropos />
                    <Universities />
                    <div className="test"></div>
                    <Contact />
                    < Footer className="footer" />



                    <Login className="log" trigger={logisopen} setTrigger={setlogisopen} setsignisopen={setsignisopen} setforgotisopen={setforgotisopen} />
                    <Signup className="sign" trigger={signisopen} setTrigger={setsignisopen} setlogisopen={setlogisopen} setconfisopen={setconfisopen} />
                    <Forgot className="forgot" trigger={forgotisopen} setTrigger={setforgotisopen} />
                    <Confirme className="confirme" trigger={confisopen} setTrigger={setconfisopen} />

                </Route>

            </Router>
        </div>

    );
}

export default Home;