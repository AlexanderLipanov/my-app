import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './ContactCard.css';


function ContactCard(props) {

    let IncomeMesseges = props.IncomeMesseges.map( (item) => item.Incmessege );
    let LastMessege = IncomeMesseges.pop().slice(0, 25);
    let quantilyFilterIncMesseges = props.IncomeMesseges.filter(item => item.Incmessege !== '' );
    let quantilyMesseges = quantilyFilterIncMesseges.length.toString();

    return(
    <NavLink activeClassName='activeContact' to={`/Chat/${props.id}`}>
<div id={props.id} className="ContactCard">
            <div className="ContactCardContainer">
                <div className="ContactAvatarContainer">
                    <img src="" alt="" className="ContactAvatar" />
                </div>
                <div className="ContactNameAndMessegeContainer">
                    <div className="ContactNameAndTimeMessageContainer">
                        <p className="ContactName">
                            {props.ContactName}
                        </p>
                        <p className="whenGetMessege">
                            today
                        </p>
                    </div> 
                    <div className="previewGetMessegeContainer">
                        <p className="previewGetMessege">
                        {LastMessege}
                        </p>
                        <div className="quantitiMessege">
                            <p className="numberMessege">
                                {quantilyMesseges}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>        
    );
}

export default ContactCard;