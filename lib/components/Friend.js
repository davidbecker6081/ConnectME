import React from 'react';

const Friend = ({ name, profileImg, currentLocation, messageFriend, friendID, openMessageView }) => {
	const alt = 'facebook profile photo'
	// const imgURL = profileImg
	return (
		<li>
			<div className="photo-name-container">
				<img className="friend-photo" src={profileImg} alt={alt} />
				<h4 className="friend-name">{name}</h4>
			</div>
			<p className="friend-location">{currentLocation}</p>
			<button className="friend-btn"
				onClick={() => {
					messageFriend(name, friendID);
					openMessageView();
				}}
			>
				Message
			</button>
		</li>
	);
};

export default Friend;
