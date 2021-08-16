import pc from '../../img/pc.svg';
import info from '../../img/info.svg';
import prod from '../../img/prod.svg';
import './Apropos.css';
import React from 'react';

const Apropos = () => {
    return (
        <div className=" apropos">

            <div className="container ">

                <div className="row">
                    <p className="title-apropos">A propos <span>EduPro</span></p>
                </div>

                <div className="col">

                    <div className="row">
                        <p>EduPro est la seul plateforme tunisienne qui regroupe
                            toutes les fonctionnalités necessaire pour facilité l'acces a
                            l'information pour les etudiant et les professeurs.</p>

                        <img src={info} alt="" />
                    </div>

                    <div className="row">

                        <img src={pc} alt="" />
                        <p>La seul plateforme 100% tunisienne qui offre l'education
                            en ligne d'une magniere facile et efficace</p>
                    </div>

                    <div className="row">
                        <p>Pour que toutes les utilisateurs soit plus productive presente
                            des fonctionnalité efficace et peritinente au méme temps</p>
                        <img src={prod} alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}


export default Apropos;