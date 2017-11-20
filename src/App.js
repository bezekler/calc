import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput1: '',
            userInput2: '',
            sum: 0,
            dif: 0,
            mult: 0,
            div: 0,
            pow: 0,
            root: 0
        };
    }

    handleUserInput1 = (e) => {
        this.setState({
            userInput1: Number(e.target.value) // NaN
        });
    };

    handleUserInput2 = (e) => {
        this.setState({
            userInput2: Number(e.target.value)
        });
    };

    onClick = () => {
        this.setState({ 
            sum: this.state.userInput1 + this.state.userInput2, 
            dif: this.state.userInput1 - this.state.userInput2,
            mult: this.state.userInput1 * this.state.userInput2,
            div: this.state.userInput1 / this.state.userInput2,
            pow: Math.pow(this.state.userInput1, this.state.userInput2),
            root: Math.pow(this.state.userInput1, 1 / this.state.userInput2)
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Calculator by Lerka!</h1>
                <form>
                    <div>
                        <label htmlFor='input1'>Var 1:</label>
                        <input id='input1' onChange={this.handleUserInput1}/>
                    </div>
                    <div>
                        <label htmlFor='input2'>Var 2:</label>
                        <input id='input2' onChange={this.handleUserInput2}/>
                    </div>
                    
                    <button type='button' onClick={this.onClick}>Calculation</button> 
                </form>
                <h3>
                   Sum: {this.state.sum}
                </h3>
                <h3>
                   Dif: {this.state.dif}
                </h3>
                 <h3>
                    Mult: {this.state.mult}
                </h3>
                <h3>
                    Div: {this.state.div}
               </h3>
                <h3>
                    Pow: {this.state.pow}
                </h3>
                 <h3>
                    Root: {this.state.root}
                </h3>
            </div>
        );
    }
}

export default App;
