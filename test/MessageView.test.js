import React from 'react';
import ReactDOM from 'react-dom';
import MessageView from '../lib/components/MessageView';
import { shallow, mount } from 'enzyme';

describe('MessageView', () => {
	let wrapper;
	let userDataFacebook;
	let messageFriendData;
	let loggedInUser;
	let messages;
	let sendMessageToFirebase;
	let retrieveMessagesFromFirebase;

	beforeEach(() => {
		messages = [
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
		userDataFacebook = {
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
		loggedInUser = {
			displayName: 'David Becker2',
			userName: 'dave',
			photo: 'url.com',
			location: 'Denver, Colorado',
		};
		sendMessageToFirebase = jest.fn();
		retrieveMessagesFromFirebase = jest.fn();

		wrapper = shallow(
			<MessageView
				messages={messages}
				userDataFacebook={userDataFacebook}
				messageFriendData={messageFriendData}
				loggedInUser={loggedInUser}
				sendMessageToFirebase={sendMessageToFirebase}
				retrieveMessagesFromFirebase={retrieveMessagesFromFirebase}
			/>
		);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});
});
