import React from "react";
import './IncomeMessege.css';

const IncomeMessege = (props) => {

    return(
        <div id={props.id} className="IncomeMessege">
            <div className="IncomeMessegeContainer">
                <div className="IncomeAvatarAndMessege">
                    <div className="AvatarIncomeMessege">
                        <img src="" alt="" className="AvatarIncomeMessegeImage" />
                    </div>
                    <div className="IncomeMessegeBlock">
                        <p className="IncomeMessegeText">
                            {props.Incmessege}
                        </p>
                    </div>
                </div>
                <p className="WhenIncomeMessege">
                    {props.IncTime}
                </p>
            </div>
        </div>
    );
}

export default IncomeMessege;