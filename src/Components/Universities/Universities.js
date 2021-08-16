import React from 'react';
import "./Universities.css";
import M from "../../img/M.svg";
import c from "../../img/c.svg";
import ga from "../../img/ga.svg";
import g from "../../img/g.svg";
import j from "../../img/j.svg";
import ma from "../../img/ma.svg";
import mano from "../../img/mano.svg";
import q from "../../img/q.svg";
import s from "../../img/s.svg";
import sf from "../../img/sf.svg";
import t from "../../img/t.svg";
import z from "../../img/t.svg";


export const Universities = ({
    onClick,
}) => {
    return (
        <div className="univs">


            <div className='Container'>
                <div className="row">
                    <p className="title-univs">Les Universités</p>
                </div>
                <div className='big'>
                    <div className='small1'>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={M} />
                                <p className='ps' >Université de Monastir</p>
                            </div>
                        </div>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={g} />
                                <p className='ps' >Université de Gabés</p>
                            </div>

                        </div>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={ga} />
                                <p className='ps' >Université de Gafsa</p>
                            </div>
                        </div>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={mano} />
                                <p className='ps' >Université de Manouba</p>
                            </div>

                        </div>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={ma} />
                                <p className='ps' >Université de Tunis El Manar</p>
                            </div>
                        </div>


                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={s} />
                                <p className='ps' >Université de Sousse</p>
                            </div>
                        </div>
                    </div>

                    <div className='small2'>
                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={t} />
                                <p className='ps' >Université de Tunis</p>
                            </div>
                        </div>


                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={z} />
                                <p className='ps' >Université El Zitouna</p>
                            </div>
                        </div>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={c} />
                                <p className='ps' >Université De Carthage</p>
                            </div>
                        </div>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={sf} />
                                <p className='ps' >Université De Sfax</p>
                            </div>
                        </div>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={j} />
                                <p className='ps' >Université De Jendouba</p>
                            </div>
                        </div>

                        <div onClick={onClick} >
                            <div className='M'>
                                <img className='imgs' src={q} />
                                <p className='ps' >Université De Kairouan</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div onClick={onClick} >
                        <div className='k M'>
                            <img className='imgs' src={q} />
                            <p className='ps' >Université De Kairouan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}
