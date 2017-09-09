import React, { Component } from 'react';

class Message extends Component {
	constructor() {
		super();
		this.state = {
			messageFriendData: {},
		};
	}

	render() {
		const { messageFriendData } = this.props;

		if (messageFriendData) {
			return <div>{messageFriendData.name}</div>;
		}
		return <div>Message a friend</div>;
	}
}

export default Message;
