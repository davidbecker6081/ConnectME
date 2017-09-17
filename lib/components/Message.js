import React from 'react';

const Message = ({ recipient, sender, message, date, loggedInUser }) => {
	const colorOfMessage =
		sender.name === loggedInUser.displayName ? 'message-loggedInUser' : 'message-otherUser';
	const textDateClass =
		sender.name === loggedInUser.displayName ? 'text-date-user' : 'text-date-recipient';

	return (
		<li className={`message-individual ${colorOfMessage}`}>
			<div className={`text-date-container ${textDateClass}`}>
				<p className="message-text">{message}</p>
				<p className="message-date">{date}</p>
			</div>
		</li>
	);
};

export default Message;
