import React, { Component } from 'react';
import Message from './Message';
import moment from 'moment';
import firebase, {
	referenceMessages,
	database,
	retrieveFromDatabase,
	pushMessage,
} from '../firebase';

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
		const { fullName, id: userId } = userDataFacebook;
		const { name: friendName, id: friendId } = messageFriendData;

		this.props.resetMessages();

		retrieveFromDatabase(fullName, friendId).then(snapshot => {
			if (snapshot.val()) {
				retrieveMessagesFromFirebase(snapshot.val());
			}
		});

		retrieveFromDatabase(friendName, userId).then(snapshot => {
			if (snapshot.val()) {
				retrieveMessagesFromFirebase(snapshot.val());
			}
		});
	}

	renderMessageHistory() {
		const { messages, messageFriendData, loggedInUser, userDataFacebook } = this.props;

		return messages.length > 0
			? (messages.map(message => {
				return <Message key={message.date} {...message} loggedInUser={loggedInUser} />;
			}))
			: (<div className="default-message-individual">Send a Message...</div>);
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
		const { fullName: userName } = userDataFacebook;
		const { id: friendId } = messageFriendData;

		pushMessage(userName, friendId, newMessage).then(() => {
			sendMessage(newMessage);
		});
	}

	render() {
		const { messageFriendData, loggedInUser } = this.props;
		const isDisabled = !this.state.message;

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
							disabled={isDisabled}
							onClick={() => {
								this.sendNewMessage();
								this.setState({
									message: '',
								});
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
