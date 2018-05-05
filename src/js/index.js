import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import './../css/style.css'
import compiledCode from './../../build/contracts/Greenbackd.json'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // YOUR CODE HERE
        }

        // Get web3 instance
        if (typeof web3 != 'undefined') {
            console.log("Using web3 detected from external source like Metamask")
            this.web3 = new Web3(web3.currentProvider)
        } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")) // if we are running it locally
        }

        // Parse contract api and create contract object
        var GreenbackdContract = this.web3.eth.contract(compiledCode.abi)
        
        // Deploys contract with test values
        var byteCode = compiledCode.bytecode
        var deployedContract = GreenbackdContract.new(
            [0, 1, 2], // itemIds to start with
            [100, 150, 200], // values to start with
            {data: byteCode, from: this.web3.eth.accounts[0], gas: 4700000},
            function(error, result) { // callback on contract deployment
                if(!error) {
                    console.log(JSON.stringify(result));
                 } else {
                    console.error(error);
                 }
            })

        this.state.contractInstance = GreenbackdContract.at(deployedContract.address)
    }

    render() {
        return (
            <div className="main-container">
                <h1>Hello</h1>
                {/* YOUR CODE HERE */}
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
