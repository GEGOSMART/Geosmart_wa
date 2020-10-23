import React from 'react'
import axios from 'axios'
import Birb from '../../../assets/img/birb.jpg'
import GeoLogo from '../../../assets/img/geosmart_logo.jpg'
import UserImage from '../../../assets/img/user.png'
import Contact from '../Contact'

class Sidepanel extends React.Component {

    state = { 
        chats: [],
    }

    componentDidMount() {
        this.getUserChats()
    }

    getUserChats = () => { 
        axios.defaults.headers = {
            "Content-Type": "application/json",
           // "Access-Control-Allow-Origin": "*"
            //Authorization: `Token ${token}`
        };

        axios.get(`http://127.0.0.1:8000/api/chat`)
        .then(res => {
            console.log(res.data);
            console.log("Hoooooolllaaaaaa");
            this.setState({
                chats: res.data
            });
        });
    }

    render(){
        const activeChats = this.state.chats.map(c => {
            return (
                <Contact 
                    key ={c.id}
                    name ={c.id}
                    picURL={GeoLogo}
                    status="online"
                    chatURL={`/chat/${c.id}`}
                    />
            )
        })

        return(
            <div id="sidepanel">
        <div id="profile">
            <div className="wrap">
                <img id="profile-img" src={UserImage} className="online" alt="" />
                <p id="profile-name">username</p>
                <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                <div id="status-options">
                    <ul>
                        <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                        <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                        <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                        <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                    </ul>
                </div>
                <div id="expanded">
                    {/* <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="mikeross" />
                    <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="ross81" />
                    <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                    <input name="twitter" type="text" value="mike.ross" /> */}
                </div>
            </div>
        </div>
        <div id="search">
            <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
            <input type="text" placeholder="Search contacts..." />
        </div>
        <div id="contacts">
            <ul>
                {activeChats}
                {/* <li className="contact">
                    <div className="wrap">
                        <span className="contact-status busy"></span>
                        <img src={Birb} alt="" />
                        <div className="meta">
                            <p className="name">Grupo2</p>
                            <p className="preview">Grupo de avistamiento de aves. Más infomación llamar al ....</p>
                        </div>
                    </div>
                </li>
                <li className="contact active">
                    <div className="wrap">
                        <span className="contact-status online"></span>
                        <img src={GeoLogo} alt="" />
                        <div className="meta">
                            <p className="name" id="lateral-group-name">groupname</p>
                            <p className="preview" id="group-lobby">group description.</p>
                        </div>
                    </div>
                </li> */}
            </ul>
        </div>
        <div id="bottom-bar">
            <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
            <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
        </div>
    </div>
        );
    }
}


export default Sidepanel;