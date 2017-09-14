import React from 'react';
import ReactDOM from 'react-dom';
import NavHeader from '../lib/components/NavHeader';
import { shallow, mount } from 'enzyme';

describe('NavHeader', () => {
	let wrapper;
	let loggedInUser;
	let userDataFacebook;

	beforeEach(() => {
		loggedInUser = {
			displayName: 'David Becker',
			userName: 'dave',
			photo: 'url.com',
			location: 'Denver, Colorado',
		};
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
		wrapper = shallow(
			<NavHeader loggedInUser={loggedInUser} userDataFacebook={userDataFacebook} />
		);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should return a header with 4 Links', () => {
		expect(wrapper.find('header').length).toEqual(1);
		expect(wrapper.find('Link').length).toEqual(4);
	});

	it.skip('should link to the correct paths', () => {
		const loginLink = wrapper.find('Link').at(0);
		const renderTestSequence = {
			subject: loginLink,
			steps: [],
		};

		renderTestSequence({
			subject: loginLink,
			steps: [
				({ history, div }) => {
					history.push('/');
				},

				({ loginLink }) => {
					loginLink.simulate('click');
				},

				({ location }) => {
					console.assert(location.pathname === '/login');
				},
			],
		});
	});

	it.skip('should render a Link with Account if the user if there is a logged in User', () => {
		expect(
			wrapper
				.find('Link')
				.at(1)
				.text()
		).toEqual('Account');
	});

	it('should render 4 divs', () => {
		expect(wrapper.find('div').length).toEqual(4);
	});

	it('should render 5 imgs', () => {
		expect(wrapper.find('img').length).toEqual(5);
	});
});
