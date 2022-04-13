const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory=require('./build/campaignFactory.json');

const provider = new HDWalletProvider(
    'service drama vocal term chimney call club urge hungry flavor boat peace',
    'https://rinkeby.infura.io/v3/6e9266fb4f0341409e2f0167d5a80777'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode})
    .send({ from : accounts[0], gas: '1000000'});



    console.log('contract deployed to', result.options.address);
    provider.engine.stop()
};
deploy();
