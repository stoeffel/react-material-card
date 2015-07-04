var React = require('react');
var Card = require('../index');

module.exports = React.createClass({
	render: function() {
		return React.createElement(
			Card, {
				style: { marginTop: '2em', color: '#455a64' },
				level: 1,
				overLevel: 3,
				outLevel: 1
			}, [
				React.DOM.div({
					style: {
						padding: '20px'
					}
				}, [
					React.DOM.h2(null, 'Usage'),
					React.DOM.p(null, 'You can install React-Material-Card via NPM'),
					React.DOM.pre({ style: {display: 'block', marginBottom: 10}},
						React.DOM.code(null, '$ npm install react-material-card --save')),
					React.DOM.pre({ style: {display: 'block', marginBottom: 10}},
						React.DOM.code(null, "var Card = require('react-material-card')"))
				])
			]);
	}
});
