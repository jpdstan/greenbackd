import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import './../css/style.css'
import compiledCode from './../../build/contracts/Greenbackd.json'


class App extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   balance: 10
 }

 if(typeof web3 != 'undefined'){
   console.log("Using web3 detected from external source like Metamask")
   this.web3 = new Web3(web3.currentProvider)
 }else{
   console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
   this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
 }

      // // Parse contract api and create contract object
      this.web3.eth.defaultAccount = this.web3.eth.accounts[0]
      
      var GreenbackdContract = this.web3.eth.contract(compiledCode.abi)


      //// Deploys contract with test values
      //// Deploy once and use contract address: 0x4c437ff76D4c19C0000ae49C80E2ed79F765096F
      
      // var byteCode = compiledCode.bytecode
      // var deployedContract = GreenbackdContract.new(
      //       [0, 1, 2], // itemIds to start with
      //       [100, 150, 200], // values to start with
      //       {data: byteCode, from: this.web3.eth.accounts[0], gas: 4300000},
      //       function(error, result) { // callback on contract deployment
      //        if(!error) {
      //         console.log(result);
      //      } else {
      //         console.error(error);
      //      }
      //   })
      // this.state.ContractInstance = GreenbackdContract.at(deployedContract.address)
      
      // or use a previously deployed contract -- enter address in hex
      this.state.ContractInstance = GreenbackdContract.at("0x4c437ff76D4c19C0000ae49C80E2ed79F765096F")

      window.a = this.state
    }

    componentDidMount(){
      this.updateState()
      this.setupListeners()

      setInterval(this.updateState.bind(this), 7e3)
    }

    updateState(){
      this.state.ContractInstance.getBalance((error, result) => {
       if(result != null){
        this.setState({
         balance: parseInt(result)
       })
      }
    })
    }

   // Listen for events and executes the voteNumber method
   setupListeners(){
    let liNodes = this.refs.numbers.querySelectorAll('li')
    liNodes.forEach(number => {
     number.addEventListener('click', event => {
      event.target.className = 'number-selected'
      this.purchase(parseInt(event.target.innerHTML), done => {
               // Remove the other number selected
               for(let i = 0; i < liNodes.length; i++){
                liNodes[i].className = ''
              }
            })
    })
   })
  }

  purchase(number, cb){
   this.state.ContractInstance.makePurchase(number, 
    (err, result) => {
     cb()
   })
 }

 render(){
   return (
    <div className="main-container">
    <h1>Greenback&rsquo;d</h1>

    <div className="block">
    <b>Amount of CO2:</b> &nbsp;
    <span>{this.state.balance}</span>
    </div>

    <hr/>

    <h2>Purchase Item</h2>

    <ul ref="numbers">
    <li>0</li>
    <li>1</li>
    <li>2</li>
    </ul>

    <hr/>
    </div>
    )
  }
}

ReactDOM.render(
<App />,
document.querySelector('#root')
)
