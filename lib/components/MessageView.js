import React, { Component } from 'react';
import Message from './Message';
import moment from 'moment';

class MessageView extends Component {
	constructor() {
		super();
		this.state = {
			messageFriendData: {},
			message: '',
		};
	}

	// componentDidMount() {
	// 	const { retrieveMessagesFromFirebase, loggedInUser, userDataFacebook } = this.props;
	// 	const user = {
	// 		name: userDataFacebook.fullName,
	// 		id: '0000000000',
	// 	};
	//
	// 	retrieveMessagesFromFirebase(user);
	// }

	renderMessageHistory() {
		const { messages, messageFriendData, loggedInUser, userDataFacebook } = this.props;
		const mockMessage = {
			recipient: {
				name: 'David Becker',
				id: '0000000000',
			},
			sender: {
				name: 'Someone Else',
				id: '111111111',
			},
			message: 'Send a Message to Someone',
			date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
		};

		if (messages.length > 0) {
			return messages
				.filter(message => {
					return message.recipient.id === messageFriendData.id;
				})
				.map(message => {
					return <Message key={message.date} {...message} loggedInUser={loggedInUser} />;
				});
		}

		return <Message key={mockMessage.date} {...mockMessage} loggedInUser={loggedInUser} />;
	}

	sendNewMessage() {
		const { userDataFacebook, messageFriendData, sendMessage } = this.props;
		const { message } = this.state;
		const newMessage = {
			recipient: {
				name: messageFriendData.name,
				id: messageFriendData.id,
			},
			sender: {
				name: userDataFacebook.fullName,
				id: '0000000000',
			},
			message,
			date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
		};

		sendMessage(newMessage);
	}

	render() {
		return (
			<section className="messages-container">
				<ul className="message-list">{this.renderMessageHistory()}</ul>
				<input
					type="text"
					value={this.state.message}
					onChange={e => {
						this.setState({
							message: e.target.value,
						});
					}}
				/>
				<button
					onClick={() => {
						this.sendNewMessage();
					}}
				>
					Send Message
				</button>
			</section>
		);
	}
}

export default MessageView;
// moment JS - for adding times to messages)
// moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
