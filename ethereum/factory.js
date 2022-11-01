import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x37c7D306AE2bc64Af6A55c15dF33a353143475A0'
);

export default instance;