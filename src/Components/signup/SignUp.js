import React from 'react';
import './style.css';

const Signup = (props) => {

    function egleb() {
        props.setTrigger(false);
        props.setlogisopen(true);
    };
    function verif() {
        props.setTrigger(false);
        props.setconfisopen(true);
    }
    return (props.trigger) ? (


        <div className="popupSign"  >

            <div className="LogblocSign">
                <button className="btn-close" onClick={() => props.setTrigger(false)} ></button>
                <lable className="TitleSign" > S 'inscrire</lable>
                < div className="coordsSign" >
                    <div className="NomSign" >
                        <lable className="LableNomSign" > Nom </lable>
                        < br />
                        < input className="InputNomSign"
                            placeholder="Entre votre Nom" />
                    </div>
                    <div className="PrenomSign">
                        <lable className="LablePrenomSign" > Prenom </lable>
                        <br />
                        < input className="InputPrenomSign" placeholder="Entre votre Prenom" />
                    </div>
                </div>
                <div className="EmailSign" >

                    <lable className="LableEmailSign" > Email </lable>
                    <br />
                    < input className="InputEmailSign" placeholder="Entre votre adresse E-mail" />
                </div>
                < div className="MDPSign" >

                    <lable className="LableMDPSign" > Mot de passe </lable>
                    <br />
                    <   input className="InputMDPSign" placeholder="Entre votre votre mot de passe" />
                </div>
                <div className="VMDPSign" >
                    < lable className="LableVMDPSign" > Verifier mot de passe </lable>
                    <   br />
                    <   input className="InputVMDPSign" placeholder="Rentre votre votre mot de passe" />
                </div>
                <div className="TypeSign" >
                    <lable className="LableTypeSign" > Mot de passe </lable>
                    <br />
                    <select className="InputTypeSign" >
                        <option value="" > --Choisir-- </option>
                        <option value="Tituleur" > Tituleur </option>
                        < option value="Etudiant" > Etudiant </option>
                    </select>
                </div>




                < div className="LastSecttionSign" >
                    <div className="SeconnecterSign" >
                        <lable className="TitleSeconnecterSign" > vous avez déjà un compte ? </lable>
                        <button type="button" className="BtnSeconnecterSign" onClick={() =>
                            egleb()
                        } > Se connecter </button>
                    </div>
                    <button type="button" className="SinscritBtnSign" onClick={() => verif()}> S 'inscrire</button>
                    {props.children}
                </div>
            </div>

        </div >
    ) : "";
};

export default Signup;