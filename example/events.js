var React = require('react');
var Card = require('../index');
var d = React.DOM;

module.exports = React.createClass({
	onClick: function(c) {
		c.elevate();
	},

	onLevelChange: function(level) {
		this.setState({level: level});
	},

	onOver: function(c) {
		c.setLevel(2);
	},

	onOut: function(c) {
		c.setLevel(1);
	},

	onFocus: function(c) {
		c.setLevel(3);
	},

	onBlur: function(c) {
		c.setLevel(1);
	},

	getInitialState: function() {
		return {
			level: 1
		};
	},

	reset: function(e) {
		e.stopPropagation();
		this.setState({level: 1});
	},

	render: function() {
		return React.createElement(
			Card, {
				style: { marginTop: '2em', color: '#455a64' },
				level: 1,
				overLevel: 3,
				outLevel: 1
			}, [
				d.div({
					style: {
						padding: '20px'
					}
				}, [
					d.h2(null, 'Events'),
					d.p(null, 'React-card supports `onClick`, `onOver`, `onOut`, `onFocus` and `onBlur`.'),

					d.h3(null, 'onClick / onLevelChange'),
					d.pre({ style: {display: 'block', marginBottom: 10}},
						d.code(null, '<Card\n  onClick={card => card.elevate()}\n  onLevelChange={level =>\n    this.updateLevelCount(level)}>...</Card>')),
					React.createElement(Card, { level: this.state.level, onClick: this.onClick, onLevelChange: this.onLevelChange, style: { padding: 10 }}, [
						d.p({ className: 'text-center' }, 'onClick: ' + this.state.level ),
						d.button({ onClick: this.reset, className: 'btn btn-default'}, 'reset')]),

					d.h3(null, 'onOver / onOut'),

					d.pre({ style: {display: 'block', marginBottom: 10}},
						d.code(null, '<Card\n  onOver={card => card.setLevel(2))}\n  onOut={card => card.setLevel(1)}>...</Card>')),
					React.createElement(Card, { level: 1, onOver: this.onOver, onOut: this.onOut, style: { padding: 10 }, height: 100 }, d.p({ className: 'text-center' }, 'move mouse over' )),

					d.h3(null, 'onFocus / onBlur'),
					d.pre({ style: {display: 'block', marginBottom: 10}},
						d.code(null, '<Card\n  onFocus={card => card.setLevel(3)}\n  onBlur={card => card.setLevel(1)}>...</Card>')),
					React.createElement(Card, { level: 1, onFocus: this.onFocus, onBlur: this.onBlur, style: { padding: 10 }},
						d.form(null, [
							d.div({ className: 'form-group' }, [
								d.label({ htmlFor: 'email' }, 'E-Mail'),
								d.input({ id: 'email' })
							])
						])),

					d.h3(null, 'onFocus with onOver / onOut'),
					d.pre({ style: {display: 'block', marginBottom: 10}},
						d.code(null, '<Card\n  onOver={c => c.setLevel(2)}\n  onOut={c => c.setLevel(1)}\n  onFocus={c => c.setLevel(3)}>...</Card>')),
					React.createElement(Card, { level: 1, onFocus: this.onFocus, onOver: this.onOver, onOut: this.onOut, style: { padding: 10 }},
						d.form(null, [
							d.div({ className: 'form-group' }, [
								d.label({ htmlFor: 'email' }, 'E-Mail'),
								d.input({ id: 'email' })
							])
						])),

					d.h3(null, 'shorthand for onFocus / onOver / onOut with setLevel'),
					d.pre({ style: {display: 'block', marginBottom: 10}},
						d.code(null, '<Card\n  overLevel={2}\n  outLevel={1}\n  focusLevel={3}>...</Card>')),
					React.createElement(Card, { level: 1, overLevel:2, outLevel:1, focusLevel:3, style: { padding: 10 }},
						d.form(null, [
							d.div({ className: 'form-group' }, [
								d.label({ htmlFor: 'email' }, 'E-Mail'),
								d.input({ id: 'email' })
							])
						]))
				])
			]);
	}
});
