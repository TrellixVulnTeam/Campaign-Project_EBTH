import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x333689a32c3d7B5b42684ff9b22056b7b995a4Bd'
);

export default instance;
