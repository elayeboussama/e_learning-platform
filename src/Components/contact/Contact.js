import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="body">
            <div className="Container">
                <div className="text">
                    <h3 className="question ">As tu une question ?</h3>
                    <h1 className="titre">Contact EduPro</h1>
                    <div className="parag">
                        <p>Nous sommes la pour vous aider et répondre à toutes vos questions.</p>
                        <p className="p2">Nous avons hate d'avoir de tes nouvelles💖</p>
                    </div>
                </div>
                <form>
                    <div className="espace col">
                        <div className="form-row">
                            <div className="input-data col ">
                                <label>Nom</label>
                                <input className="nom" type="text" required />


                            </div>
                            <div className="input-data col">
                                <label>Prenom</label>
                                <input className="nom prenom" type="text" required />
                                <div className="underline"></div>

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <label>Email</label>
                                <input type="email" required />
                                <div className="underline"></div>

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <label>Subject</label>
                                <input type="text" required />
                                <div className="underline"></div>


                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <label>Message</label>
                                < textarea cols="30" rows="5" required></textarea>
                                <div className="underline"></div>

                            </div>
                        </div>
                        <div className="form-row submit-btn">
                            <div className="input-data">
                                <div className="inner"></div>
                                <input type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;