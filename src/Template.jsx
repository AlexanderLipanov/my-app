import './Template.css';
import React from 'react';
import ContactsDashboard from './Contacts/ContactsDashboard';
import ChatWindow from './ChatWindow/ChatWindow';
import {BrowserRouter as Router,
        Switch, Route} from 'react-router-dom';
import * as axios from 'axios';


const instance = axios.create({
    pageSize: 100,
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

            MyContacts: [
                {ContactName: '', id: 0, 
                    IncomeMesseges: [{Incmessege:'', IncTime: new Date().toLocaleString(), id: 23},
                ]
            }
        ]
    }
}

    componentDidMount() {
        instance.get(`users`).then( response =>  response.data.items.map( (LU) => {
            let container = {
                ContactName: LU.name,
                id: LU.id,
                IncomeMesseges: [{Incmessege:'', IncTime: new Date().toLocaleString(), id: 23},
                ]
            }
            return container;
        })).then( response => this.setUsers(response));
        console.log(this.state.MyContacts);        
    }

    setUsers = (response) => {
        this.setState({
            MyContacts: [...response]
        });
        console.log(this.state.MyContacts);
    }

    render() {

        return (
            <div className="Template">
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

//                 {ContactName: 'Kate Amelchenco', id: 1, 
//                 IncomeMesseges: [{Incmessege:'Ffff',
//                 IncTime: new Date().toLocaleString(), id: 21},
//                 {Incmessege:'Hello',
//                 IncTime: new Date().toLocaleString(), id: 213},
//                 {Incmessege:'Kitty',
//                 IncTime: new Date().toLocaleString(), id: 214},
//             ], 
//                 },
//                 {ContactName: 'Denis Vasylyev', id: 2, 
//                 IncomeMesseges: [{Incmessege:'Afaefutjjbjmskjfnjghrevsknvjahvrnvjdfbvrebverhbvdfbvr',
//                 IncTime: new Date().toLocaleString(), id: 22},
//                 {Incmessege:'What you want',
//                 IncTime: new Date().toLocaleString(), id: 224},
//             ], 
//                 },
//                 {ContactName: 'Alexandr Lipanov', id: 3, 
//                 IncomeMesseges: [{Incmessege:'Reafcxcf',
//                 IncTime: new Date().toLocaleString(), id: 23},
//                 {Incmessege:'Reafcxcf',
//                 IncTime: new Date().toLocaleString(), id: 235},
//             ], 
//                 },
//                 {ContactName: 'Alexandr Lipanov', id: 4, 
//                 IncomeMesseges: [{Incmessege:'Reafcxcf',
//                 IncTime: new Date().toLocaleString(), id: 24},
//             ], 
//                 },
//             ],