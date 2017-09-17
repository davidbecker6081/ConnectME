import React, { Component } from 'react';
import Message from './Message';
import moment from 'moment';
import firebase, { referenceMessages, database } from '../firebase';

class MessageView extends Component {
	constructor() {
		super();
		this.state = {
			message: '',
		};
	}

	componentDidMount() {
		const {
			retrieveMessagesFromFirebase,
			loggedInUser,
			userDataFacebook,
			messageFriendData,
		} = this.props;

		firebase
			.database()
			.ref(`${userDataFacebook.fullName}/${messageFriendData.id}`)
			.once('value')
			.then(snapshot => {
				if (snapshot.val()) {
					retrieveMessagesFromFirebase(snapshot.val());
				}
			});

		firebase
			.database()
			.ref(`${messageFriendData.name}/${userDataFacebook.id}`)
			.once('value')
			.then(snapshot => {
				if (snapshot.val()) {
					retrieveMessagesFromFirebase(snapshot.val());
				}
			});
	}

	// shouldComponentUpdate() {
	// how to dynamically be checking for update to database
	// nextprops vs. this.props
	// return true for a re-render
	// const {
	// 	retrieveMessagesFromFirebase,
	// 	loggedInUser,
	// 	userDataFacebook,
	// 	messageFriendData,
	// } = this.props;

	// console.log(
	// 	firebase.database().ref(`${userDataFacebook.fullName}/${messageFriendData.id}`).database.onWrite((e) => {
	// 		console.log('e', e);
	// 	})
	// );

	// if (firebase.database().ref(`${userDataFacebook.fullName}/${messageFriendData.id}`).database) {
	// 	console.log('true');
	// } else {
	// 	console.log('false');
	// }
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
		// const dateForKey = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
		// let dateForKey;
		// dateForKey = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');

		if (messages.length > 0) {
			// console.log('messages', messages.recipient.id, messageFriendData.id);
			return messages.map(message => {
				return <Message key={message.date} {...message} loggedInUser={loggedInUser} />;
			});
		}

		return <div className="default-message-individual">Send a Message...</div>;
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

		firebase
			.database()
			.ref(`${userDataFacebook.fullName}/${messageFriendData.id}`)
			.push(newMessage)
			.then(() => {
				sendMessage(newMessage);
			});
	}

	render() {
		const { messageFriendData, loggedInUser } = this.props;

		return (
			<section className="messages-wrapper">
				<h3>Messages</h3>

				{!messageFriendData.name && (
					<div className="message-default">Select a Friend to Message</div>
				)}

				{messageFriendData.name && (
					<div className="message-container">
						<h5>
							<span>{messageFriendData.name}</span>
							<span>{loggedInUser.userName}</span>
						</h5>
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
					</div>
				)}
			</section>
		);
	}
}

export default MessageView;
// moment JS - for adding times to messages)
// moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
