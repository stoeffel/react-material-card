var React = require('react');
window.React = React;

var Header = require('./header.js');
var Usage = require('./usage.js');
var Levels = require('./levels.js');
var Events = require('./events.js');
var Styling = require('./styling.js');

var div = React.DOM.div;
React.render(
	div({ className: 'container', style: { marginBottom: 40} }, [
		div({className: 'row'}, [
			div({className: 'col-md-6'}, [
				React.createElement(Header),
				React.createElement(Usage)]),
			div({className: 'col-md-6'}, [
				React.createElement(Levels),
				React.createElement(Events),
				React.createElement(Styling)
			])])
	]), document.body);
