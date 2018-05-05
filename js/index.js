import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import Solc from 'solc'
import './../css/index.css'
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
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
        }

        // Compile Solidity contract
        code = fs.readFileSync('./contracts/greenbackd.sol').toString()
        compiledCode = Solc.compile(code)

        // Parse out contract API 
        abiDefinition = JSON.parse(compiledCode.contracts[':greenbackd'].interface)

        // What gets deployed on blockchain
        byteCode = compiledCode.contracts[':greenback'].bytecode
        
        // Create and deploy contract
        GreenbackdContract = web3.eth.contract(abiDefinition)
        deployedContract = GreenbackdContract.new(
            [0, 1, 2, 3], // itemIds
            [50, 100, 150, 200], // values
            {data: byteCode, from: web3.eth.accounts[0], gas: 5000000}
        )

        contractInstance = Greenbackd.at(deployedContract.address)
    }

    render() {
        return (
            <div className="main-container">
                <!-- CODE HERE -->
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
