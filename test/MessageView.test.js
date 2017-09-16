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
			displayName: 'David Becker',
			userName: 'dave',
			photo: 'url.com',
			location: 'Denver, Colorado',
		};
		messageFriendData = {
			name: 'Forrest Sansing',
			id: '562272102',
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

	it('should have a default state', () => {
		const defaultState = {
			message: '',
		};

		expect(wrapper.state()).toEqual(defaultState);
	});

	it('should render the correct elements if messageFriendData is present', () => {
		expect(wrapper.find('.messages-wrapper').length).toEqual(1);
		expect(wrapper.find('.message-container').length).toEqual(1);
		expect(wrapper.find('.message-list').length).toEqual(1);
	});

	it('should render the correct name and username in the message container', () => {
		const friendName = 'Forrest Sansing';
		const userName = 'dave';

		expect(
			wrapper
				.find('span')
				.at(0)
				.text()
		).toEqual(friendName);
		expect(
			wrapper
				.find('span')
				.at(1)
				.text()
		).toEqual(userName);
	});

	it('should render message default if there is no message friend data', () => {
		expect(wrapper.find('.message-default').length).toEqual(0);

		wrapper = shallow(
			<MessageView
				messages={messages}
				userDataFacebook={userDataFacebook}
				messageFriendData={{}}
				loggedInUser={loggedInUser}
				sendMessageToFirebase={sendMessageToFirebase}
				retrieveMessagesFromFirebase={retrieveMessagesFromFirebase}
			/>
		);

		expect(wrapper.find('.message-default').length).toEqual(1);
	});

	it('should change state when a user inputs a message', () => {
		const expectedState = {
			message: 'test message',
		};
		const input = wrapper.find('input').at(0);

		input.simulate('change', { target: { value: 'test message' } });

		expect(wrapper.state()).toEqual(expectedState);
	});

	it.skip('should send a new message when the button is clicked', () => {
		const mockSend = jest.fn();
		const button = wrapper.find('button').at(0);

		button.simulate('click');
		expect(mockSend).toHaveBeenCalled();
	});

	it.skip('should return a default message individual if no messages', () => {
		messages = [];
		wrapper = mount(
			<MessageView
				messages={messages}
				userDataFacebook={userDataFacebook}
				messageFriendData={{}}
				loggedInUser={loggedInUser}
				sendMessageToFirebase={sendMessageToFirebase}
				retrieveMessagesFromFirebase={retrieveMessagesFromFirebase}
			/>
		);
    expect(wrapper.props().messages.length).toEqual(0)
		expect(wrapper.find('.default-message-individual').length).toEqual(1);
	});

	it('should render the correct amount of Message components per messages', () => {
		const expectedMessageLength = messages.length;

		expect(wrapper.find('Message').length).toEqual(expectedMessageLength);
	});
});
