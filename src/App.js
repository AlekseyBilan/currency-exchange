import React, {Component} from 'react';
import currencies from "./currencies";
import Ticker from "./Ticker/Ticker";
import './ticker.css';

class App extends Component {
    state = {
        selectedPairs: ['btc_usd']
    };

    render() {
        return (
            <div className="App">
                <aside>
                    <ul className="currList">
                        {this.getHtml(currencies, this.handleChange)}
                    </ul>
                </aside>
                <main>
                    {
                        this.state.selectedPairs.map( pair => <Ticker key = {pair} pair = {pair}/>)
                    }
                </main>
            </div>
        );
    }

    getHtml(currencies) {
        return currencies.map((curr, index) => (
            <li key={index} className='ticker'>
                <input type="checkbox" id={curr} onChange={this.handleChange(curr)}/>
                <label htmlFor={curr}>{curr.toUpperCase()}</label>
            </li>));
    }

    handleChange = (currency) => event => {
        const checked = event.target.checked;

        this.setState (//async function
            ({selectedPairs}) => {
                let pairs = [...selectedPairs]; //selectedPairs.slice()
                if(checked && !pairs.includes(currency)){
                    pairs.push(currency);
                } else {
                    pairs = pairs.filter(pair => pair !== currency);
                }
                return {selectedPairs: pairs}
            }
        )
    }
}
export default App;
