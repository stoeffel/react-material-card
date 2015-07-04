'use strict';
var React, ReactAddons, assert, Card, TestUtils;

describe('React-Card', function() {
	before(function() {
    React = require('react');
    ReactAddons = require('react/addons');
    assert = require('assert');
    Card = require('../../');
    TestUtils = React.addons.TestUtils;
	});

  it('should render the card', function() {
		var component = React.render( React.createElement(Card), document.body);
		var div = TestUtils.findRenderedDOMComponentWithTag(component, 'div');

		assert.ok(div.getDOMNode());

		component = React.render( React.createElement(Card, null, React.DOM.h1(null, 'test')), document.body);
		var h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');

		assert.ok(h1.getDOMNode().textContent, 'test');
	});

  it('should react to events', function(done) {
		var component = React.render(
			React.createElement(
				Card, {
					level: 1,
					onClick: function(c) {
						c.setLevel(2);
					},
					onLevelChange: function(l) {
						assert.equal(l, 2);
						done()
					}
				}, React.DOM.button(null, 'test')), document.body);

		var button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');

		React.addons.TestUtils.Simulate.click(button);
	});
});
