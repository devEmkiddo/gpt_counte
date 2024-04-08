const {Web3} = require('web3');
const contractABI = require('./CounterABI.json');

const web3 = new Web3('HTTP://127.0.0.1:7545'); // Use your Ethereum node URL

const contractAddress = '0xd3b9f6e498564CBFFb1Cb5EA34BeA12b380D6a07'; // Replace with your contract address
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

async function getCount() {
    const count = await contractInstance.methods.getCount().call();
    console.log('Current count:', count);
}

async function incrementCount() {
    await contractInstance.methods.increment().send({ from: '0x799b112f254F6Fb702a1B321EeDef5F876196cE1' }); // Replace with your Ethereum address
    console.log('Count incremented!');
}

async function decrementCount() {
    await contractInstance.methods.decrement().send({ from: '0x799b112f254F6Fb702a1B321EeDef5F876196cE1' }); // Replace with your Ethereum address
    console.log('Count decremented!');
}

getCount(); // Get current count
incrementCount(); // Increment count
getCount(); // Get updated count
decrementCount(); // Decrement count
getCount(); // Get updated count
