import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount } from 'enzyme';
import { makeMockMessage, makeMockMessage2 } from '../__mock__/testMocks';


describe('Message', () => {
	let wrapper;
	let mockMessage

	beforeEach(() => {
		mockMessage = makeMockMessage()
		wrapper = shallow(mockMessage);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should return an li with a classes of message-loggedInUser and message-individual', () => {
		const liElementLoggedIn = wrapper.find('li').at(0);

		expect(wrapper.find('li').length).toEqual(1);
		expect(liElementLoggedIn.props().className).toEqual('message-individual message-loggedInUser');
	});

	it('should return an li with a classes of message-otherUser and message-individual', () => {
		wrapper = shallow(makeMockMessage2());
		const liElementLoggedIn = wrapper.find('li').at(0);

		expect(liElementLoggedIn.props().className).toEqual('message-individual message-otherUser');
	});

	it.skip('should return an h4', () => {
		expect(wrapper.find('.message-sender').length).toEqual(1);
	});

	it('should return a p element with class message-text and one with message-date', () => {
		expect(wrapper.find('p').length).toEqual(2);
		expect(
			wrapper
				.find('p')
				.at(0)
				.props().className
		).toEqual('message-text');
		expect(
			wrapper
				.find('p')
				.at(1)
				.props().className
		).toEqual('message-date');
	});
});
