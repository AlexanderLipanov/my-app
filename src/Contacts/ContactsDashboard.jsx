import React from 'react';
import './ContactsDashboard.css';
import iconPeoples from '../icons/BitmapPeoples.png';
import iconNewMessege from '../icons/BitmapNewMessege.png';
import ContactCard from './ContactCard';

class ContactsDashboard extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {
            Contact: '',
            classNameClearSearchContact: 'clearSearchContacts',
            classActive: '',
        }

            let FilterContact = this.props.MyContacts.filter( (item) => item.ContactName !== '' );
            this.ViewContactCards = FilterContact.map( (cc) => <ContactCard ContactName={cc.ContactName} key={cc.id} id={cc.id} IncomeMesseges={cc.IncomeMesseges} /> );
    }

    searchContact = (e) => {
        this.setState({ Contact: e.target.value.toLowerCase() });
        if ( this.state.Contact !== '' ) {
            let  SearchContact = this.props.MyContacts.filter( (item) => item.ContactName.toLowerCase().includes(this.state.Contact));
            this.ViewContactCards = SearchContact.map( (cc) => <ContactCard ContactName={cc.ContactName} key={cc.id} id={cc.id} IncomeMesseges={cc.IncomeMesseges} /> )
        }

        this.setState({classActive: '_active'});
        console.log(this.state.Contact);
    }

    allContacts = () => {
        this.setState({Contact: ''});
        let FilterContact = this.props.MyContacts.filter( (item) => item.ContactName !== '' );
        this.ViewContactCards = FilterContact.map( (cc) => <ContactCard ContactName={cc.ContactName} key={cc.id} id={cc.id} IncomeMesseges={cc.IncomeMesseges} /> );
        this.setState({classActive: ''});
    }

    render() {

        return (

            <div className="ContactsDashboard">
            <div className="headerContactDashboard">
                <div className="headerContactDashboardContainer">
                    <div className="listDilogsBlock">
                        <img src={iconPeoples} alt="" className="iconPeoples" />
                        <button onClick={this.allContacts} className="listDialogs">
                        Список диалогов
                        </button>
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
        </div>
        );
    }
}

export default ContactsDashboard;