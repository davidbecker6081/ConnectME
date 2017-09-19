import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from '../lib/components/FriendList';
import Login from '../lib/components/Login';
import Message from '../lib/components/Message';
import NavHeader from '../lib/components/NavHeader';
import MessageView from '../lib/components/MessageView';

export const mockFriend = () => {
	return {
		name: 'David Becker',
		profileImg: 'url.com',
		currentLocation: 'Denver, Colorado',
		messageFriend: jest.fn(),
		friendId: '1',
		openMessageView: jest.fn(),
	};
};

export const makeMessageFriendData = () => {
	return {
		name: 'Forrest Sansing',
		id: '562272102',
	};
};

export const makeFriends = () => {
	return [
		{
			name: 'Dave1',
			picture: { data: { url: 'url.com' } },
			id: '1',
			location: { location: { name: 'Denver, Colorado' } },
		},
		{
			name: 'Dave2',
			picture: { data: { url: 'url2.com' } },
			id: '2',
			location: { location: { name: 'Denver, Colorado' } },
		},
		{
			name: 'Dave3',
			picture: { data: { url: 'url3.com' } },
			id: '3',
			location: { location: { name: 'Denver, Colorado' } },
		},
	];
};

export const makeUserData = () => {
	return {
		hometown: {
			id: '1',
			name: 'Memphis, Tennessee',
		},
		currentLocation: {
			id: '2',
			name: 'Denver, Colorado',
		},
		fullName: 'David Becker',
	};
};

export const makeLoggedInUser = () => {
	return {
		displayName: 'David Becker2',
		userName: 'dave',
		photo: 'url.com',
		location: 'Denver, Colorado',
	};
};

export const makeLoggedInUser1 = () => {
	return {
		displayName: 'David Becker2',
		userName: 'dave',
		photo: 'url.com',
		location: 'Denver, Colorado',
	};
};

export const makeLoggedInUser3 = () => {
	return {
		displayName: 'David Becker3',
		userName: 'dave',
		photo: 'url.com',
		location: 'Denver, Colorado',
	};
};

export const makeMessage = () => {
	return {
		recipient: {
			name: 'David Becker',
			id: '0000000000',
		},
		sender: {
			name: 'David Becker2',
			id: '111111111',
		},
		message: 'Send a Message to Someone',
		date: '03 30 2017',
	};
};

export const makeArrayOfMessages = () => {
	return [
		{
			recipient: {
				name: 'David Becker',
				id: '0000000000',
			},
			sender: {
				name: 'David Becker2',
				id: '111111111',
			},
			message: 'Send a Message to Someone1',
			date: '2014 March',
		},
		{
			recipient: {
				name: 'David Becker',
				id: '0000000000',
			},
			sender: {
				name: 'David Becker2',
				id: '111111111',
			},
			message: 'Send a Message to Someone2',
			date: '2014 March',
		},
		{
			recipient: {
				name: 'David Becker2',
				id: '111111111',
			},
			sender: {
				name: 'David Becker',
				id: '0000000000',
			},
			message: 'Send a Message to Someone3',
			date: '2014 March',
		},
	];
};

export const makeMessageView = () => {
	return (
		<MessageView
			messages={makeArrayOfMessages()}
			userDataFacebook={makeUserData()}
			messageFriendData={makeMessageFriendData()}
			loggedInUser={makeLoggedInUser()}
			sendMessageToFirebase={jest.fn()}
			retrieveMessagesFromFirebase={jest.fn()}
		/>
	);
};

export const makeMessageViewNoFriend = () => {
	return (
		<MessageView
			messages={[]}
			userDataFacebook={makeUserData()}
			messageFriendData={{}}
			loggedInUser={makeLoggedInUser()}
			sendMessageToFirebase={jest.fn()}
			retrieveMessagesFromFirebase={jest.fn()}
		/>
	);
};

export const makeFriendList = () => {
	return (
		<FriendList
			friends={makeFriends()}
			userDataFacebook={makeUserData()}
			messageFriendData={makeMessageFriendData()}
			loggedInUser={makeLoggedInUser()}
			fetchFriends={jest.fn()}
			messageFriend={jest.fn()}
		/>
	);
};

export const makeLogin = () => {
	return <Login storeLoggedInUserData={jest.fn()} />;
};

export const makeMockMessage = () => {
	return <Message key={1} {...makeMessage()} loggedInUser={makeLoggedInUser()} />;
};

export const makeMockMessage2 = () => {
	return <Message key={1} {...makeMessage()} loggedInUser={makeLoggedInUser3()} />;
};

export const makeNavHeader = () => {
	return <NavHeader loggedInUser={makeLoggedInUser()} userDataFacebook={makeUserData()} />;
};
