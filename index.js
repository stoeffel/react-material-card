'use strict';
var React = require('react');
var div = React.DOM.div;

var levels = [{
		boxShadow: "0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)"
	}, {
		boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
	}, {
		boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
	}, {
		boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
	}, {
		boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
}];


var baseStyle = {
  display: 'block'
};

var Card = React.createClass({

	propTypes: {
		width: React.PropTypes.oneOfType ([
			React.PropTypes.number,
			React.PropTypes.string
		]),
		initialLevel: React.PropTypes.number,
		onClick: React.PropTypes.func
	},

	getDefaultProps: function() {
		return {
			width: '80%',
			initialLevel: 1,
			onClick: function() {}
		};
	},

	getInitialState: function() {
		return {
			level: this.props.initialLevel
		};
	},

	onClick: function() {
		this.props.onClick({
			elevate: this.elevate,
			lower: this.lower
		});
	},

	elevate: function(n) {
		this.setState({level: this.getNextLevel(n)});
	},

	lower: function(n) {
					this.setState({level: this.getPrevLevel(n)});
	},

	getNextLevel: function(n) {
		n = n || 1;
		return this.state.level < levels.length? this.state.level + n: this.state.level;
	},

	getPrevLevel: function(n) {
		n = n || 1;
		return this.state.level < levels.length? this.state.level - n: this.state.level;
	},

	render: function() {
		var props = this.props;
		var state = this.state;

		baseStyle.boxShadow = levels[state.level - 1].boxShadow;
		baseStyle.width = props.width;

		return div({
		  style: baseStyle,
			onClick: this.onClick
		}, props.children);
	}
});



React.render(<Card initialLevel={3} width="500px" onClick={c => c.lower()}>
<img style={{width: "100%"}} src="http://img2.wikia.nocookie.net/__cb46/champloo/images/5/50/Wiki-background"/>
<h1 style={{ padding:'0.3em' }}>samurai champloo</h1>
</Card>, document.body);
