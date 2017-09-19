import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { makeMessageView, makeMessageViewNoFriend } from '../__mock__/testMocks';

describe('MessageView', () => {
	let wrapper;
	let messageView

	beforeEach(() => {
		messageView = makeMessageView()
		wrapper = shallow(
			messageView
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
			makeMessageViewNoFriend()
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
		wrapper = mount(
			makeMessageViewNoFriend()
		);
		expect(wrapper.props().messages.length).toEqual(0);
		expect(wrapper.find('.default-message-individual').length).toEqual(1);
	});

	it('should render the correct amount of Message components per messages', () => {
		const expectedMessageLength = 3;

		expect(wrapper.find('Message').length).toEqual(expectedMessageLength);
	});
});
