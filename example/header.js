var React = require('react');
var Card = require('../index');

module.exports = React.createClass({
	render: function() {
		return React.createElement(
			Card, {
				style: { marginTop: '2em', color: '#455a64' },
				level: 3,
				onOver: function(c) {
					c.setLevel(5);
				},
				onOut: function(c) {
					c.setLevel(3);
				}
			}, [
				React.DOM.img({
					style: {
						width: "100%",
						borderRadius: '2px 2px 0px 0px'
					},
					src: "./bg.jpg"
				}),
				React.DOM.div({
					style: {
						padding: '20px'
					}
				}, [
					React.DOM.h1(null, 'React-Card'),
					React.DOM.p({
						className: 'lead'
					}, 'A material design card for react')
				])
			]);
	}
});
