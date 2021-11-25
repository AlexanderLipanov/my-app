import React from "react";
import './ChatWindow.css';
import IncomeMessege from './IncomeMessege';
import SendMessege from "./SendMessege";
import SmilesIcon from '../icons/BitmapSmiles.png';
import SendPhotoIcon from '../icons/BitmapSendPhoto.png';
import SendVoiceMessegeIcon from '../icons/imageSendVoiceMessege.png';
import SendeMessegeIcon from '../icons/PathSendMessege.png';

class ChatWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
            SendMesseges: [
                {SndMessege: '', id: 1, SndTime: new Date().toLocaleString()},
            ],

            NewSendMessege: '',
        }
    }

    ChangeInput = (e) => {

        // Записывает новое сообщение в state

        this.setState({NewSendMessege: e.target.value});
    }

    MessegeSend = () => {

        // Новое сообщение записывает в массив отправленных сообщений в state`e

        this.setState({
            
            SendMesseges: [...this.state.SendMesseges, {SndMessege: this.state.NewSendMessege, 
                                                            id: this.state.SendMesseges.length+1,
                                                            SndTime: new Date().toLocaleString()}]                                           
        });
        this.setState({NewSendMessege: ''});    // Зануляет input
    }

    MessegeSendKeyPress = (e) => {
        
        // Отправляет сообщение по нажатию клавиши Enter на input

        if ( e.key === 'Enter' ) {
            this.setState({
            
                SendMesseges: [...this.state.SendMesseges, {SndMessege: this.state.NewSendMessege, 
                                                                id: this.state.SendMesseges.length+1,
                                                                SndTime: new Date().toLocaleString()}]                                           
            });
            this.setState({NewSendMessege: ''}); // Зануляет input
        }
    }

    render () {
        let FilterIncMesseges = this.props.IncomeMesseges.filter(item => item.Incmessege !== '' ); // Фильирует пустые сообщения
        this.RenderIncomeMesseges = FilterIncMesseges.map( (IMR) => <IncomeMessege IncTime={IMR.IncTime} Incmessege={IMR.Incmessege} /> );

        let FilterSndMesseges = this.state.SendMesseges.filter(item => item.SndMessege !== '' ); // Фильирует пустые сообщения
        this.SendMessegesRender = FilterSndMesseges.map( (SM) => <SendMessege SndMessege={SM.SndMessege} 
                                                                    key={SM.id} id={SM.id} SndTime={SM.SndTime} /> );

        return( 
        <div id={this.props.id} className="ChatWindow">
            <div className="HeaderChatWindow">
                <div className="HeaderChatWindowContainer">
                    <div className="FriendNameAndIndicator">
                    <p className="FriendName">
                        {this.props.ContactName}
                    </p>
                    <div className="indicatroOnline">
                        <div className="indicator"></div>
                        <p className="online">
                        онлайн
                        </p>
                    </div>
                    </div>
                    <button className="settings">
                        <div className="settingsIcon"></div>
                        <div className="settingsIcon"></div>
                        <div className="settingsIcon"></div>
                    </button>
                </div>
            </div>
            <div className="MessegeWindow">
                <div className="MessegeWindowContainer">
                    <div className="MessegeHidden">
                        <div className="MessegeScroll">
                            {this.RenderIncomeMesseges}
                            {this.SendMessegesRender}
                        </div>
                    </div>
                </div>
                <div className="InputMessege">
                <div className="inputMessegeBlock">
                    <button className="SmilesButton">
                        <img src={SmilesIcon} alt="" className="SmilesIcon" />
                    </button>
                    <textarea onKeyPress={this.MessegeSendKeyPress} onChange={this.ChangeInput} value={this.state.NewSendMessege}  type="text" placeholder="Введите текст сообщения…" className="InputTextMessege" />
                    <button className="SendPhotoButton">
                        <img src={SendPhotoIcon} alt="" className="SendPhotoIcon" />
                    </button>
                    <button className="SendVoiceMessegeButton">
                        <img src={SendVoiceMessegeIcon} alt="" className="SendVoiceMessegeIcon" />
                    </button>
                    <button onClick={this.MessegeSend} className="SendMessegeButton">
                        <img src={SendeMessegeIcon} alt="" className="SendMessegeIcon" />
                    </button>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default ChatWindow;