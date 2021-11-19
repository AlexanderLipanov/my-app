import React from "react";
import './SendMessege.css';

function SendMessege(props) {

    return(

        <div id={props.id} className="SendMessege">
            <div className="SendMessegeContainer">
                <div className="SendAvatarAndMessege">
                    <div className="AvatarSendMessege">
                        <img src="" alt="" className="AvatarSendMessegeImage" />
                    </div>
                    <div className="SendMessegeBlock">
                        <p className="SendMessegeText">
                            {props.SndMessege}
                        </p>
                    </div>
                </div>
                <p className="WhenSendMessege">
                    {props.SndTime}
                </p>
            </div>
        </div>
    );
}

export default SendMessege;