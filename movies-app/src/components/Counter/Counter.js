import { Component, createElement } from 'react';
import './Counter.css'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: props.initialCounterValue || 0
        }
    }

    handleIncrement = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    handleDecrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }))
    }

    render(){
        return createElement(
            'div',
            { className: 'counter' },
            createElement('p', null, `Count: ${this.state.count}`),
            createElement('button', { onClick: this.handleIncrement }, 'Increment'),
            createElement('button', { onClick: this.handleDecrement }, 'Decrement')
        )
    }
}

export default Counter;