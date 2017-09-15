import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from '../lib/components/FriendList';
import { shallow, mount } from 'enzyme';
import MessageContainer from '../lib/containers/MessageContainer';

describe('FriendList', () => {
	let wrapper;
	let friends;
	let userDataFacebook;
	let messageFriendData;
	let loggedInUser;
	let fetchFriends;
	let messageFriend;

	beforeEach(() => {
		friends = [
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
		fetchFriends = jest.fn();
		messageFriend = jest.fn();
		wrapper = shallow(
			<FriendList
				friends={friends}
				userDataFacebook={userDataFacebook}
				messageFriendData={messageFriendData}
				loggedInUser={loggedInUser}
				fetchFriends={fetchFriends}
				messageFriend={messageFriend}
			/>
		);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should have a default state', () => {
		const defaultState = {
			friendsOfLocation: [],
			isMessageViewShowing: false,
			locationInput: '',
		};

		expect(wrapper.state()).toEqual(defaultState);
	});

	it('should render 3 divs as containers', () => {
		expect(
			wrapper
				.find('div')
				.first()
				.props().className
		).toEqual('friend-message-container');
		expect(
			wrapper
				.find('div')
				.at(1)
				.props().className
		).toEqual('friend-list-container');
		expect(
			wrapper
				.find('div')
				.at(2)
				.props().className
		).toEqual('search-container');
	});

	it('should change state upon change of location input', () => {
		const input = wrapper.find('input').first();

		expect(wrapper.state().locationInput).toEqual('');
		input.simulate('change', { target: { value: 'Denver' } });
		expect(wrapper.state().locationInput).toEqual('Denver');
	});

	it('should call fetchFriends if the button is pressed', () => {
		const button = wrapper.find('.search-friends-btn').at(0);

		expect(fetchFriends).toHaveBeenCalledTimes(0);
		button.simulate('click');
		expect(fetchFriends).toHaveBeenCalled();
	});

	it.skip('should call renderFriends when component mounts', () => {
		const renderFriends = jest.fn();

		expect(wrapper.find('.friend-list').length).toEqual(1);
		wrapper.update();
		expect(renderFriends).toHaveBeenCalled();
	});

	it.skip('should render a MessageContainer if isMessageViewShowing is true', () => {
		expect(wrapper.find('.messages-wrapper').length).toEqual(0);

		wrapper.setState({
			isMessageViewShowing: true,
		});
		wrapper.update();

		expect(wrapper.find('.messages-wrapper').length).toEqual(1);
	});

	it('should run fetchFriends when fetchFriends method is called', () => {
		expect(fetchFriends).toHaveBeenCalledTimes(0);
		wrapper.instance().fetchFriends();
		expect(fetchFriends).toHaveBeenCalledTimes(1);
	});

	it('should change state when openMessageView is called', () => {
		const initialState = {
			friendsOfLocation: [],
			isMessageViewShowing: false,
			locationInput: '',
		};
		const changedState = {
			friendsOfLocation: [],
			isMessageViewShowing: true,
			locationInput: '',
		};

		expect(wrapper.state()).toEqual(initialState);
		wrapper.instance().openMessageView();
		expect(wrapper.state()).toEqual(changedState);
	});

	it('should return the correct amount of Friend components per the friends in store', () => {
		expect(wrapper.find('Friend').length).toEqual(3);
	});
});
