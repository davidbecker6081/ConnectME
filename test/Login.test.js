import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../lib/components/Login';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

describe('Login', () => {
	let wrapper;
	let storeLoggedInUserData;

	beforeEach(() => {
		storeLoggedInUserData = jest.fn();
		wrapper = shallow(<Login storeLoggedInUserData={storeLoggedInUserData} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should have a default state', () => {
		const expectedState = {
			username: '',
		};

		expect(wrapper.state()).toEqual(expectedState);
	});

	it('state should change when user inputs a username', () => {
		const usernameInput = wrapper.find('input').first();
		const expectedState = {
			username: 'Dave',
		};

		usernameInput.simulate('change', { target: { value: 'Dave' } });

		expect(wrapper.state()).toEqual(expectedState);
	});

	it.skip('should change the inputs value when a user types', () => {
		const expectedValue = 'David';
		const textInput = wrapper.find('input').first();

		textInput.simulate('change', { target: { value: 'David' } });

		expect(textInput.text()).toEqual(expectedValue);
	});

	it.skip('should submit a username when the submit button is clicked', () => {
		const mockLogin = jest.fn();
		const submitBtn = wrapper.find('.login-btn').at(0);
		const form = wrapper.find('form').at(0);
		const callback = spy();

		wrapper = mount(<Login onSubmit={callback} />);

		expect(form.props().onSubmit).toBeDefined();
		expect(form.props().onSubmit).toEqual(callback);
		submitBtn.simulate('submit');
		//
		expect(callback).toHaveBeenCalled();
	});

	it('should render two images', () => {
		expect(wrapper.find('img').length).toEqual(2);
	});

	it('should render a Redirect if there is a loggedInUser', () => {
		expect(wrapper.find('Redirect').length).toEqual(0);

		wrapper.setState({
			sername: 'a',
			user: { name: 'Dave' },
		});
		wrapper.update();

		expect(wrapper.find('Redirect').length).toEqual(1);
	});

  
});
