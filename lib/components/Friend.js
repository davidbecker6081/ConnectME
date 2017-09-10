import React from 'react';

const Friend = ({ name, profileImg, currentLocation, messageFriend, friendID }) => {
	const alt = 'facebook profile photo'
	// const imgURL = profileImg
	return (
		<li>
			<img src={profileImg} alt={alt} />
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
