const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// Reference to build folder
const buildPath = path.resolve(__dirname, 'build');
// Deleting build folder
fs.removeSync(buildPath);

// Reference to Campaign.sol file in contracts folder
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

// Checks to see if build folder exists. If not then it creates one
fs.ensureDirSync(buildPath);

for (let contract in output){
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
