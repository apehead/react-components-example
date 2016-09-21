import React, { Component, PropTypes } from 'react';

class Incremental extends Component {

  static propTypes = {
    initialValue: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    step: PropTypes.number
  }

  static defaultProps = {
    initialValue: 0,
    min: 0,
    step: 1
  }

  state = { value: this.props.initialValue };

  getDecrementStep(prevValue) {
    const diff = Math.abs(prevValue - this.props.min);
    return diff < this.props.step ? diff : this.props.step;
  };

  getIncrementStep(prevValue) {
    const diff = Math.abs(prevValue - this.props.max);
    return diff < this.props.step ? diff : this.props.step;
  };

  increment = () => {
    this.setState(({ value }, props) => ({
      value: value < props.max ? value + this.getIncrementStep(value) : value
    }));
  };

  decrement = () => {
    this.setState(({ value }, props) => ({
      value: value >= props.min ? value - this.getDecrementStep(value) : value
    }));
  };

  change = event => {
    const value = parseInt(event.currentTarget.value, 10);

    if (!isNaN(value) && value >= this.props.min && value <= this.props.max) {
      this.setState({ value });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <input type="text" value={this.state.value} onChange={this.change} />
        <button onClick={this.increment}>+</button>
      </div>
    );
  }

}

export default Incremental;
