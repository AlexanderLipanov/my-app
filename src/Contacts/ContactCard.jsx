import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './ContactCard.css';


function ContactCard(props) {

    let IncomeMesseges = props.IncomeMesseges.map( (item) => item.Incmessege ); // Из пришедших данных выбираем только пришедшие сообщения
    let LastMessege = IncomeMesseges.pop().slice(0, 25); // Показыаем в карточке контакта только последнее сообщение длиною не более 25 символов
    let quantilyFilterIncMesseges = props.IncomeMesseges.filter(item => item.Incmessege !== '' ); // Не считаем количество входящих пустых сообщений
    let quantilyMesseges = quantilyFilterIncMesseges.length.toString(); // Считаем количество входящих сообщений от контакта

    let quantitiMessege = 'quantitiMessege' // Если сообщений нет, индикатор не показываем
    if (quantilyMesseges === '0') {
        quantitiMessege = 'quantitiMessege_disActive'
    }

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
                        <div className={quantitiMessege}>
                            <p className='numberMessege'>
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