
# Greenback'd Ethereum Dapp

## Description
This is a simple web app that demonstrates consumer usage of our application. In a typical scenario, a *customer* scans their purchase (i.e. QR code) using the camera of their device after making some purchase with a *company*. Three things happen at this point:
1.  The *customer* gets credited with some sort of compensation at the company's discretion (e.g. a 10% coupon code). This credit is stored in the *application*.
2. The *company* gets credited with the amount of CO2 savings associated with the purchase. This credit is stored on the *blockchain* (more specifically, in a hash table of companies to their balance CO2 credits in `greenbackd.sol`). 
3. The transaction gets added to the blockchain (in our application, the Kovan test network).

## Setup

### Prerequisites
* Install *Metamask* and start running on Kovan test network (that's where our test contract is deployed)

###  Run locally 
* `cd` to `greenbackd/` and run `npm install` to install npm dependencies
* `npm run build` to compile contracts and package static files
    * This should create `/build/contracts/*.sol` and `/dist/build.js`
* `serve` to host files locally (install if you don't have it)
*  Navigate to `localhost:3000/dist/index.html`. At this point you should get a pop-up from Metamask asking if you want to deploy the contract `greenbackd.sol`.

## Resources
* https://medium.com/@merunasgrincalaitis/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e
* https://github.com/merlox/casino-ethereum/blob/master/src/js/index.js
* https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2