import React from 'react';
import './Forgot.css';


const Forgot = (props) => {


    return (props.trigger) ? (
        <div className="forg">
            <div className="forgotbloc">
                <button className="btn-close" onClick={() => props.setTrigger(false)} ></button>
                <p>check your Email to recreate your password</p>
            </div>
        </div >
    ) : "";
}
export default Forgot;