import React from 'react';


class Clock extends React.Component {
  
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      date: new Date().toLocaleTimeString(),
      isShow: true
    }
    this.togglePause = this.togglePause.bind(this);
    this.tick = this.tick.bind(this);
  }


  // 3
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
    // console.log(`Old State`, this.state);
    // console.log(`New State`, this.nextState);
    // console.log(this.state.date === this.state.date);

    // return false // not rerender
  }

  // 5
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');

  }

  // 2
  componentDidMount() {
    console.log('componentDidMount');
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId)
  }
  
  tick() {
    this.setState(prev => {
      if (prev.isShow) return ({
        date: new Date().toLocaleTimeString()
      })
    });
  }

  togglePause() {
    this.setState(prev => {
      return {
        isShow: !prev.isShow
      }
    })
  }

  // 1, 4
  render() {
    console.log('render');
    
    console.log(`time: `, this.state);

    return (
      <div>
        Сейчас: {this.state.date}
        <br />
        <button onClick={this.togglePause}>Pause</button>
      </div>
    )
  }
};

export default Clock;
