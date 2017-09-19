import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { makeNavHeader } from '../__mock__/testMocks';

describe('NavHeader', () => {
	let wrapper;
	let NavHeader;

	beforeEach(() => {
		NavHeader = makeNavHeader();
		wrapper = shallow(NavHeader);
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
