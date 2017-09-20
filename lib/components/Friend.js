import React from 'react';

const Friend = ({
	name,
	profileImg,
	currentLocation,
	messageFriend,
	friendID,
}) => {
	const alt = 'facebook profile photo';
	// const imgURL = profileImg
	return (
		<li>
			<img className="friend-photo" src={profileImg} alt={alt} />
			<div className="name-location-container">
				<h4 className="friend-name">{name}</h4>
				<p className="friend-location">{currentLocation}</p>
			</div>
			<button
				className="friend-btn"
				onClick={() => {
					messageFriend(name, friendID);
				}}
			>
				Message
			</button>
		</li>
	);
};

export default Friend;
