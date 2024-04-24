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
            createElement('p', {'data-testid':'counter-text'}, `Count: ${this.state.count}`),
            createElement('button', { onClick: this.handleIncrement, 'data-testid': 'counter-increment-btn' }, 'Increment'),
            createElement('button', { onClick: this.handleDecrement, 'data-testid': 'counter-decrement-btn' }, 'Decrement')
        )
    }
}

export default Counter;