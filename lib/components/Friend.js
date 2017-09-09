import React from 'react';

const Friend = ({ name, imageURL, currentLocation, messageFriend, friendID }) => {
	return (
		<li>
			<img src={imageURL} alt="facebook photo" />
			<h4>{name}</h4>
			<p>{currentLocation}</p>
			<button
				onClick={() => {
					messageFriend(name, friendID);
					console.log(friendID);
					console.log(name);
				}}
			>
				Message
			</button>
		</li>
	);
};

export default Friend;
