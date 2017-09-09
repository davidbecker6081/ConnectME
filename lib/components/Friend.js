import React from 'react';

const Friend = ({ name, imageURL, currentLocation }) => {
	return (
    <li>
      <img src={imageURL} alt="facebook photo" />
      <h4>{name}</h4>
      <p>currentLocation</p>
    </li>
  );
};

export default Friend;
