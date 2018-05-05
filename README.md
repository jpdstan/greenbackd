# Greenback'd Ethereum Dapp

## Setup
* Install Metamask and start running on a test network (doesn't matter which one)
## Run locally 
* `cd` to `greenbackd/` and run `npm install` to install npm dependencies
* `npm run build` to compile contracts and package static files
    * This should create `/build/contracts/*.sol` and `/dist/build.js`
* `serve` to host files locally (install if you don't have it)
*  Navigate to `localhost:3000/dist/index.html`. At this point you should get a pop-up from Metamask asking if you want to deploy the contract `greenbackd.sol`.

## Resources
* https://medium.com/@merunasgrincalaitis/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e
* https://github.com/merlox/casino-ethereum/blob/master/src/js/index.js
* https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2