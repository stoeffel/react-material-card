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
					React.DOM.h2(null, 'Styling'),
					React.DOM.p(null, 'React-Card provides the some important styling attributes directly as props. Every thing else can be set using style or className'),
					React.DOM.pre({ style: {display: 'block', marginBottom: 10}},
						React.DOM.code(null, '<Card width={50} height={50} borderRadius={20} style={{ fontSize: 20, padding: 12 }} className="fancyCard">...</Card>')),
						React.createElement(Card, {width:50, height:50, borderRadius:20, style:{ fontSize: 20, padding: 12 }, className:"fancyCard"}, React.DOM.p({ style: { marginTop: 0 }}, '\\o/'))
				])
			]);
	}
});
