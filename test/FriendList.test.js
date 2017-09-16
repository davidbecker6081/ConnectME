import React from 'react';
import ReactDOM from 'react-dom';
import FriendList from '../lib/components/FriendList';
import { shallow, mount } from 'enzyme';
import MessageContainer from '../lib/containers/MessageContainer';
import fetchMock from 'fetch-mock';
import friendListMock from '../__mock__/friendListMock';

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

	afterEach(() => {
		fetchMock.restore();
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

	it('should call renderFriends when component mounts', () => {
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

	it('should fetch friend data when fetchFriends is called', () => {
		fetchMock.get(
			'https://graph.facebook.com/v2.10/10152786482452059?fields=about,name,hometown,location,email,friends.limit(200){name,hometown,location,about,picture{url}}&access_token=EAACEdEose0cBAPj7cFySqAZBBLxYIOfi0XVAG1aZAUVP2ZCdyZCGnxCg92zQAMoMuWMP6y6UYijRJTWby0ifT7e3LSMgw2Gga8FcNLjuscFZAoXRfzndVgAyZBUfmXfsbl1LJYkL7b2JwshzKtPk7JO68AkXLqgxT9e8JUgQRXFzWfePWwVzJQK6crR5jLqUAZD',
			{ status: 200, body: friendListMock }
		);

		wrapper.instance().fetchFriends();
		wrapper.update();
		expect(fetchMock.called()).toEqual(true);
		expect(
			fetchMock.called(
				'https://graph.facebook.com/v2.10/10152786482452059?fields=about,name,hometown,location,email,friends.limit(200){name,hometown,location,about,picture{url}}&access_token=EAACEdEose0cBAPj7cFySqAZBBLxYIOfi0XVAG1aZAUVP2ZCdyZCGnxCg92zQAMoMuWMP6y6UYijRJTWby0ifT7e3LSMgw2Gga8FcNLjuscFZAoXRfzndVgAyZBUfmXfsbl1LJYkL7b2JwshzKtPk7JO68AkXLqgxT9e8JUgQRXFzWfePWwVzJQK6crR5jLqUAZD'
			)
		);
		expect(fetchMock._matchedCalls.length).toEqual(1);
		expect(fetchMock.routes[0].method).toEqual('GET');
		expect(fetchMock.routes[0].response.body).toEqual(friendListMock);
	});
});
