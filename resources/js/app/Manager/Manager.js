import React from 'react';
import axios from 'axios';



//Imports

class Manager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
        this.componentPost = this.componentPost.bind(this);
    }

    componentDidMount() {
        axios.get('/api/messages').then(response => {
            this.setState({
                messages: response.data
            })
        })
        setInterval(
            function() {
                axios.get('/api/messages').then(response => {
                    this.setState({
                        messages: response.data
                    })
                })
            }.bind(this),
            2000
        )
    }

    componentPost(event) {
        event.preventDefault(event);
        const name = document.getElementById('name').value;
        const body = document.getElementById('message').value;
        if(body.length === 0) {
            alert('Пожалуйста введите сообщение');
        } else {
            axios.post('/api/messages/post', {
                name: name,
                body: body
            });
            axios.get('/api/messages').then(response => {
                this.setState({
                    messages:response.data
                })
            })
        }
    }

    render() {
        const messages = this.state.messages;
        const componentPost = this.componentPost;
        if (messages.length > 0) {
            return (
                <div className="container">
                    <form>
                        <h2>Manager</h2>
                        <input className="input" type="text" id="name" name="name" defaultValue="Manager" disabled />
                        <textarea className="textarea" id="message" name="message"></textarea>
                        <input className="submit" type="submit" value="Отправить" onClick={componentPost} />
                        <div className="messages">
                            {messages.map(el => {
                                return (
                                    <div key={el.id}>
                                        <h3>{el.name}</h3>
                                        <p>{el.body}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <form>
                        <h2>Manager</h2>
                        <input className="input" type="text" id="name" name="name" defaultValue="Manager" disabled />
                        <textarea className="textarea" id="message" name="message"></textarea>
                        <input className="submit" type="submit" value="Отправить" onClick={componentPost} />
                        <div className="messages">
                            Сообщений нет.
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Manager;