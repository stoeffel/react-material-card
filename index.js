'use strict';
var React = require('react');
var div = React.DOM.div;

var levels = [{
  boxShadow: "none"
}, {
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

var Card = React.createClass({

  propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object,
    width: React.PropTypes.oneOfType ([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    height: React.PropTypes.oneOfType ([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    level: React.PropTypes.number,
    onLevelChange: React.PropTypes.func,
    onClick: React.PropTypes.func,
    onOver: React.PropTypes.func,
    onOut: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    overLevel: React.PropTypes.number,
    outLevel: React.PropTypes.number,
    focusLevel: React.PropTypes.number,
		animationDuration: React.PropTypes.number,
		noAnimation: React.PropTypes.bool,
		noBorderRadius: React.PropTypes.bool,
		borderRadius: React.PropTypes.number,
		noBackgroundColor: React.PropTypes.bool,
		levels: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
			className: 'rcard',
			style: {},
      level: 1,
      onLevelChange: function() {},
      onClick: function() {},
      onOver: function() {},
      onOut: function() {},
      onFocus: function() {},
      onBlur: function() {},
			animationDuration: 250,
			noAnimation: false,
			noBorderRadius: false,
			borderRadius: 2,
			noBackgroundColor: false,
			levels: levels
    };
  },

  getInitialState: function() {
    return {
			over: false,
			hasFocus: false,
      level: this.props.level
    };
  },

	componentWillReceiveProps: function(next) {
		if (this.state.level !== next.level) {
			this.setLevel(next.level);
		}
	},

  onClick: function() {
    this.props.onClick(this.getApi());
  },

  onOver: function() {
		this.setState({ over: true });
		if (!this.state.hasFocus) {
			this.props.onOver(this.getApi());
			if (this.props.overLevel) this.setLevel(this.props.overLevel);
		}
  },

  onOut: function() {
		this.setState({ over: false });
		if (!this.state.hasFocus) {
			this.props.onOut(this.getApi());
			if (this.props.outLevel) this.setLevel(this.props.outLevel);
		}
  },

  onFocus: function() {
		this.setState({ hasFocus: true });
    this.props.onFocus(this.getApi());
    if (this.props.focusLevel) this.setLevel(this.props.focusLevel);
  },

  onBlur: function() {
		this.setState({ hasFocus: false });
    this.props.onBlur(this.getApi());
		if (this.state.over) {
			this.props.onOver(this.getApi());
			if (this.props.overLevel) this.setLevel(this.props.overLevel);
		} else {
			this.props.onOut(this.getApi());
			if (this.props.outLevel) this.setLevel(this.props.outLevel);
		}
  },

  getApi: function() {
    return {
      elevate: this.elevate,
      lower: this.lower,
      setLevel: this.setLevel,
			getLevel: this.getLevel
    };
  },

  elevate: function(n) {
    this.setLevel(this.getNextLevel(n));
  },

  lower: function(n) {
    this.setLevel(this.getPrevLevel(n));
  },

  getLevel: function() {
    return this.state.level;
  },

  setLevel: function(n) {
		this.props.onLevelChange(n);
    this.setState({level: n});
  },

  getNextLevel: function(n) {
    n = n || 1;
    return this.state.level < this.props.levels.length -1? this.state.level + n: this.state.level;
  },

  getPrevLevel: function(n) {
    n = n || 1;
    return this.state.level > 0? this.state.level - n: this.state.level;
  },

  render: function() {
    var props = this.props;
    var state = this.state;
		var baseStyle = props.style;

		if (props.width) baseStyle.width = props.width;
		if (props.height) baseStyle.height = props.height;
    baseStyle.boxShadow = props.levels[state.level].boxShadow;
    if (!props.noBorderRadius) baseStyle.borderRadius = props.borderRadius;
    if (!props.noBackgroundColor) baseStyle.backgroundColor = '#fff';
		if (!props.noAnimation) baseStyle.transition = 'box-shadow ' + props.animationDuration + 'ms';

    return div({
      className: props.className,
      style: baseStyle,
      onLevelChange: this.onLevelChange,
      onClick: this.onClick,
      onMouseOver: this.onOver,
      onMouseOut: this.onOut,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, props.children);
  }
});

module.exports = Card;
