import React, { useEffect, useRef } from 'react';
import './style.css'

const Login = (props) => {



    function egleb() {
        props.setTrigger(false);
        props.setsignisopen(true);
    };

    function forgot() {
        props.setTrigger(false);
        props.setforgotisopen(true);
    };


    return (props.trigger) ? (

        <div className="popup">

            <div className="Logbloc">
                <button className="btn-close" onClick={() => props.setTrigger(false)} ></button>
                <lable className="Title">Se connecter</lable>
                <div className="Email">
                    <lable className="LableEmail">Email</lable>
                    <br />
                    <input className="InputEmail" placeholder="Entre votre adresse E-mail" />
                </div>
                <div className="MDP">
                    <lable className="LableMDP">Mot de passe</lable>
                    <br />
                    < input className="InputMDP" placeholder="Entre votre adresse E-mail" />
                </div>
                <div className="Remember">
                    <input className="Rememberme" type="radio" />
                    <lable className="LableRemember">Remember me</lable>
                </div>
                <div className="LastSecttion">
                    <div className="AnotherMDP">
                        <a href="#Sinscrire" className="forget" onClick={() =>
                            forgot()
                        }  > j'ai oubliée mon mot de passe</a>

                    </div>
                    <div className="Sinscrire">
                        <lable className="TitleSinscrire">vous n'avez pas un encore?</lable>
                        <button type="button" className="BtnSinscrire" onClick={() =>
                            egleb()
                        } >S'inscrire</button>
                    </div>
                    <button type="button" className="ConnectBtn">Se connecter</button>
                    {props.children}
                </div>
            </div>

        </div>


    ) : "";
};

export default Login;