import React, {Component} from 'react';
import '../ticker.css';

class Ticker extends Component {

    state = {
        value: 0,
    };
    fetchData = () => {
        return fetch('http://localhost:3001/value', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'name='+this.props.pair
        })
            .then(response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
                    response.json().then(data => {
                        this.setState({
                            value : data
                        });
                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    };

    componentDidMount(){
        this.fetchData();
        this.updateCurrInterval = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.updateCurrInterval);
    }

    render(){
        return <div className="ticker">
                    <p>{this.props.pair.toUpperCase().replace('_', ' to ')}</p>
                    <p>{this.state.value}</p>
                </div>
    }

    handlerClick = (addToList, index, event) => {
        this.setState(
            (state) => {
                console.log(state);
                return {isActive: !state.isActive}
            }, addToList(index)
        )
    };
}

export default Ticker