import React from 'react';
import ReactDOM from 'react-dom';
import Friend from '../lib/components/Friend';
import { shallow, mount } from 'enzyme';
import { mockFriend } from '../__mock__/testMocks';

describe('Friend', () => {
	let wrapper;
	let friend;

	beforeEach(() => {
		friend = mockFriend();
		wrapper = shallow(<Friend key={9} {...friend} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should return an li element', () => {
		expect(wrapper.find('li').length).toEqual(1);
	});

	it('should return a div with class of name-location-container', () => {
		expect(wrapper.find('.name-location-container').length).toEqual(1);
	});

	it('should return an img and h4 with the correct info', () => {
		const expectedName = 'David Becker';
		const imgURL = 'url.com';

		expect(
			wrapper
				.find('.friend-photo')
				.at(0)
				.props().src
		).toEqual(imgURL);
		expect(
			wrapper
				.find('.friend-name')
				.at(0)
				.text()
		).toEqual(expectedName);
	});

	it('should return a p element with the correct current location', () => {
		const expectedLocation = 'Denver, Colorado';

		expect(
			wrapper
				.find('.friend-location')
				.at(0)
				.text()
		).toEqual(expectedLocation);
	});

	it('should return a button and run messageFriend and openMessageView', () => {
		const button = wrapper.find('.friend-btn');

		expect(button.length).toEqual(1);

		button.simulate('click');

		expect(friend.messageFriend).toHaveBeenCalled();
		expect(friend.openMessageView).toHaveBeenCalled();
	});
});
