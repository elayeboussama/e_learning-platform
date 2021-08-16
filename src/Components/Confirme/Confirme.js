import React from 'react';
import './Confirme.css';


const Confirme = (props) => {


    return (props.trigger) ? (
        <div className="conf">
            <div className="confbloc">
                <button className="btn-close" onClick={() => props.setTrigger(false)} ></button>
                <p>check your Email to verify your account</p>
            </div>
        </div >
    ) : "";
}
export default Confirme;