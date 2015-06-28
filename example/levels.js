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
					React.DOM.h2(null, 'Levels'),
					React.DOM.p(null, 'React-card supports 6 levels'),
					React.DOM.pre({ style: {display: 'block', marginBottom: 10}},
						React.DOM.code(null, '<Card level={0}>...</Card>')),
					React.DOM.div({ style: { display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}, [
						React.createElement(Card, { level: 0, width: 50, height: 50 }, React.DOM.h1({ style: { marginTop: 0 }}, '0')),
						React.createElement(Card, { level: 1, width: 50, height: 50 }, React.DOM.h1({ style: { marginTop: 0 }}, '1')),
						React.createElement(Card, { level: 2, width: 50, height: 50 }, React.DOM.h1({ style: { marginTop: 0 }}, '2')),
						React.createElement(Card, { level: 3, width: 50, height: 50 }, React.DOM.h1({ style: { marginTop: 0 }}, '3')),
						React.createElement(Card, { level: 4, width: 50, height: 50 }, React.DOM.h1({ style: { marginTop: 0 }}, '4')),
						React.createElement(Card, { level: 5, width: 50, height: 50 }, React.DOM.h1({ style: { marginTop: 0 }}, '5'))
					])
				])
			]);
	}
});
