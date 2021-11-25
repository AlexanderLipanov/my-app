import React from 'react';
import './ContactsDashboard.css';
import iconPeoples from '../icons/BitmapPeoples.png';
import iconNewMessege from '../icons/BitmapNewMessege.png';
import ContactCard from './ContactCard';
import axios from "axios";
import { Redirect } from 'react-router-dom';

const instance = axios.create({
    
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'f00dbd61-4234-4717-a1c5-1f810d6208a3'
    }
});

class ContactsDashboard extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {
            Contact: '',
            classNameClearSearchContact: 'clearSearchContacts',
            classActive: '',
            resultCode: null,
        }
        
    }

    searchContact = (e) => {

        // Поиск в свписке контактов

        this.setState({ Contact: e.target.value.toLowerCase() });
        if ( this.state.Contact !== '' ) {
            let  SearchContact = this.props.MyContacts.filter( (item) => item.ContactName.toLowerCase().includes(this.state.Contact));
            this.ViewContactCards = SearchContact.map( (cc) => <ContactCard ContactName={cc.ContactName} key={cc.id} id={cc.id} IncomeMesseges={cc.IncomeMesseges} /> )
        }

        this.setState({classActive: '_active'});
        console.log(this.state.Contact);
    }

    allContacts = () => {

        // Возвращает все контакты 

        this.setState({Contact: ''});
        let FilterContact = this.props.MyContacts.filter( (item) => item.ContactName !== '' );
        this.ViewContactCards = FilterContact.map( (cc) => <ContactCard ContactName={cc.ContactName} key={cc.id} id={cc.id} IncomeMesseges={cc.IncomeMesseges} /> );
        this.setState({classActive: ''});
    }

    LogOut = () => {

        // Осуществляет выход из приложения

        instance.delete('/auth/login', {
            email: this.state.email,
            password: this.state.password,
        }).then( response => this.setState({ resultCode: response.data.resultCode }) );
        console.log(this.state.resultCode);
    }

    render() {

        if ( this.state.Contact === '' ) { // Инициализирует контакты, при начальной загрузке
            let FilterContact = this.props.MyContacts.filter( (item) => item.ContactName !== '' );
            this.ViewContactCards = FilterContact.map( (cc) => <ContactCard ContactName={cc.ContactName} key={cc.id} id={cc.id} IncomeMesseges={cc.IncomeMesseges} /> );
        }

        if ( this.state.resultCode === 0 ) return <Redirect to='/' /> // Переадресовывает на страницу входа в приложение

        return (

            <div className="ContactsDashboard">
            <div className="headerContactDashboard">
                <div className="headerContactDashboardContainer">
                    <div className="listDilogsBlock">
                        <img src={iconPeoples} alt="" className="iconPeoples" />
                        <div className="listDialogs">
                        Список диалогов
                        </div>
                    </div>
                    <img src={iconNewMessege} alt="" className="iconNewMessege" />
                </div>
            </div>
            <div className="searchContacts">
                <input onChange={this.searchContact} value={this.state.Contact} placeholder='Поиск среди контактов' className="inputSearchContacts" /> 
                <button onClick={this.allContacts} className={`${this.state.classNameClearSearchContact.toString()}` + `${this.state.classActive.toString()}`}>
                    <span className="crest"></span>
                    <span className="crest"></span>
                </button>
            </div>
            <div className="contactsList">
                <div className="contactsListScroll">
                <div className="contactsListHidden">
                {this.ViewContactCards}
                </div>
                </div>
            </div>
            <div className="logOutBlock">
                <button onClick={this.LogOut} className="logOut">Log Out</button>
            </div>
        </div>
        );
    }
}

export default ContactsDashboard;