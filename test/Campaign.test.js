const assert = require('assert');
const ganache = require('ganache-cli');
const { default: Web3 } = require('web3');
const web3 = new Web3(ganache.provider());

// Using ../ to get out of test directory
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum.build/Campaign.json');

let accounts;
let facotry;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.getAccounts();

    // Deploying a new version of the contract 
    facotry = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});

    await facotry.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    // Taking out the first element of array and 
    // assigning it to campaignAddress
    [campaignAddress] = await facotry.methods.getDeployCampaigns().call();

    // Since campaign is already deployed we just find it
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface), 
        campaignAddress
    );
});


