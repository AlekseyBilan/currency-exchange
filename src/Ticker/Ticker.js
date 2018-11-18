import React, {Component} from 'react';
import './ticker.css';

class Ticker extends Component {
    render(){
        const {curr} = this.props;
        return {curr}
    }
}

export default Ticker