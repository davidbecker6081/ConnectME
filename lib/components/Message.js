import React from 'react';

const Message = ({ recipient, sender, message, date, loggedInUser }) => {
	const colorOfMessage =
		sender.name === loggedInUser.displayName ? 'message-loggedInUser' : 'message-otherUser';

	return (
    <li className={`message-individual ${colorOfMessage}`}>
      <h4 className='message-sender'>{sender.name}</h4>
      <p className='message-text'>{message}</p>
      <p className='message-date'>{date}</p>
    </li>
  );
};

export default Message;
