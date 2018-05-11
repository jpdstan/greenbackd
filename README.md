
# Greenback'd Ethereum Dapp

## Description
This is a simple web application that demonstrates consumer facing interface that interacts with [our smart contract]((https://kovan.etherscan.io/address/0x4c437ff76d4c19c0000ae49c80e2ed79f765096f) deployed in the [Kovan test network](https://kovan-testnet.github.io/website/). The smart contract is programmed using the [Solidity](https://solidity.readthedocs.io/en/v0.4.23/#) language. The interface is programmed using [React](https://reactjs.org/) JavaScript library. To interact with the smart contract we use the [Truffle](http://truffleframework.com/) framework. The modules used in the project are bundled using [webpack](https://webpack.js.org/).


 In a typical scenario, a *customer* scans their purchase (through a QR code) using the camera of their device after making some purchase from a partner *company*. Three things happen at this point:

1. The *customer* gets credited with a compensation at the company's discretion (for example, a 10% coupon code). This credit is stored in the *application*.
2. The *company* gets credited with the amount of CO2 savings associated with the purchase. This credit is stored on the *blockchain* (more specifically, in a hash table of companies and their balance CO2 credits in the smart contract deployed through `greenbackd.sol`). 
3. The transaction gets added to the blockchain (in our application, we have chosen to use the [Kovan test network](https://kovan-testnet.github.io/website/)).

## Screenshot

![Consumer facing interface](./img/screenshot.png "Screenshot")

## Setup

### Prerequisites
* Install [Metamask](https://metamask.io/) and start running on Kovan test network (that's where our [test contract](https://kovan.etherscan.io/address/0x4c437ff76d4c19c0000ae49c80e2ed79f765096f) is deployed)

### Run on your device locally 
* `cd` to `greenbackd/` and run `npm install` to install npm dependencies
* `npm run build` to compile contracts and package static files
    * This should create `/build/contracts/*.sol` and `/dist/build.js`
* `serve` to host files locally (install if you don't have it)
*  Navigate to `localhost:5000/dist/index.html` to visualize the interface (the port number might be different; however, `serve` should print out the correct one for your machine).

## Resources
* https://medium.com/@merunasgrincalaitis/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e
* https://github.com/merlox/casino-ethereum/blob/master/src/js/index.js
* https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2