import './Template.css';
import React from 'react';
import ContactsDashboard from '../Contacts/ContactsDashboard';
import ChatWindow from '../ChatWindow/ChatWindow';
import {BrowserRouter as Router,
        Switch, Route} from 'react-router-dom';
import * as axios from 'axios';
import Preloader from '../ChatWindow/Preloader';


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'f00dbd61-4234-4717-a1c5-1f810d6208a3'
    }
});

class Template extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {

        MyContacts: [ ],  
        currentPage: 1,
        pageSize: 100,
        isFetching: false,
    }
}

    componentDidMount() {

        this.setState({ isFetching: true }); // Активирует анимацию, при отправке запроса на сервер

        instance.get(`users?page=${this.state.currentPage}&count=${this.state.pageSize}`) // Запрашивает контакты с сервера
        .then( response =>  response.data.items.map( (LU) => { // Подготавлиает данные в удобном виде для клиента
            let container = {
                ContactName: LU.name,
                id: LU.id,
                IncomeMesseges: [{Incmessege:'', IncTime: new Date().toLocaleString(), id: 1},
                ]
            }
            return container;
        })).then( response => this.setUsers(response));      
    }

    setUsers = (response) => {

        // Записывает пришедшие контакты в массив контактов на клиенте

        this.setState({
            MyContacts: [...response]
        });
        this.setState({ isFetching: false }); // Отключает анимацию
    }

    render() {

        return (
            <div className="Template">
                { this.state.isFetching ? <Preloader /> : null } 
                <ContactsDashboard MyContacts={this.state.MyContacts} />
                {this.state.MyContacts.map( (CC) =><Switch>  
                    <Route exact path={`/Chat/${CC.id}`} >
                    <ChatWindow ContactName={CC.ContactName}  IncomeMesseges={CC.IncomeMesseges} />
                    </Route>
                    </Switch>  
                )}           
            </div>
        );
    }
}

export default Template;

// MyContacts: [
//     {ContactName: '', id: 0, 
//         IncomeMesseges: [{Incmessege:'', IncTime: new Date().toLocaleString(), id: 23},
//     ],
// }
// ],  