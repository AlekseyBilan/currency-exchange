import React, {Component, Fragment} from 'react';
import currencies from "../currencies";
import Ticker from "./Ticker";

class TickerList extends Component {
    render() {
        return <Fragment>{
                    currencies.map( (curr, index) => (
                        <li key={index} className='ticker'><Ticker curr = {curr}/></li>)
                    )
                }</Fragment>
    }
}

export default TickerList;