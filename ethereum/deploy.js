const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'keep job expect desert okay unusual reunion surprise danger provide burst life',
  // remember to change this to your own phrase!
  'https://goerli.infura.io/v3/f813665d0b004b1f8cfda082d0692b6c'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '700001', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  //provider.engine.stop();
};
deploy();