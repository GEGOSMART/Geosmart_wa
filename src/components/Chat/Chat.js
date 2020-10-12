import React from 'react';
import chatStyle from '../../assets/css/chat.css'
import Sidepanel from './Sidepanel/Sidepanel'
import GeoLogo from '../../assets/img/geosmart_logo.jpg'
import UserImage from '../../assets/img/user.png'
import WebSocketInstance from '../../websocket';

function TimeAgo(minutesAgo) {
        
    if(minutesAgo < 60){
        return <small>
            Hace {minutesAgo} minutos
        </small> 
    }else if(minutesAgo >= 60 && minutesAgo < 60*24){
        return <small>
            Hace {Math.round(minutesAgo/60)} horas
        </small> 
    } else if(minutesAgo >= 60*24){
        return <small>
            Hace {Math.round(minutesAgo/(60*24))} días
            </small>
    }
}

class Chat extends React.Component{

    constructor(props){
        super(props)
        this.state = {}

        this.waitForSocketConnection(() => {
            WebSocketInstance.addCallbacks(
                this.setMessages.bind(this),
                this.addMessage.bind(this));
            WebSocketInstance.fetchMessages(this.props.currentUser);   
            });
    }

    waitForSocketConnection(callback){
        const component = this;
        setTimeout(
            function(){
                if(WebSocketInstance.state() === 1){
                    console.log('connection is secure');
                    callback();
                    return;
                } else {
                    console.log('waiting for connection...');
                    component.waitForSocketConnection(callback);
                }
            }, 100);

    }

    setMessages(messages){
        this.setState({messages: messages.reverse()});
    }

    addMessage(message){
        this.setState({
            messages: [...this.state.messages, message]
        });
    }

    sendMessageHandler = event =>{
        event.preventDefault();
        const messageObject = {
            from: 'Miguel',
            content: this.state.message
        }
        WebSocketInstance.newChatMessage(messageObject);
        this.setState({
            message: ''
        })
    }

    messageChangeHandler = event =>{
        this.setState({
            message: event.target.value
        });
    }


    renderMessages = (messages) => {
        const currentUser = 'Miguel';
        return messages.map(message => (
            <li 
                key={message.id}
                className ={message.author === currentUser ? 'sent' : 'replies'} >
                <img src={UserImage} alt=""/>
                <p>
                    {message.content}
                    <br />
                    {TimeAgo(Math.round((new Date().getTime() - new Date(message.timestamp))/60000))}
                    {/* <small>
                        
                        {
                        Math.round((new Date().getTime() - new Date(message.timestamp))/60000)
                         } minutes ago
                    </small> */}
                </p>
            </li>
        ));
    }

    render(){
        const messages = this.state.messages;

        return(
            <div id="frame" className={chatStyle}>
            <Sidepanel />
            <div className="content">
                <div className="contact-profile">
                    <img src={GeoLogo} alt="" />
                    <p id="upper-group-name">groupname</p>
                    <div className="social-media">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                         <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="messages">
                    <ul id="chat-log">
                        {
                            messages &&
                            this.renderMessages(messages)
                        }
                    </ul>
                </div>
                <div className="message-input">
                    <form onSubmit={this.sendMessageHandler}>
                        <div className="wrap">
                        <input 
                            onChange={this.messageChangeHandler}
                            value={this.state.message}
                            id ="chat-message-input" type="text" placeholder="Write your message..." />
                        <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                        <button id="chat-message-submit" className="submit">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        )
    }
}

export default Chat;