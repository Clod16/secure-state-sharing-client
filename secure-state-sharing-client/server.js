// const port = process.env.PORT || 3000;
const config = require('config-fabric-network.json');
const blockchainCaller = require('blockchainCaller');
const nodeLedgerClinet =  require("node-ledger-client"); 

async function main() {
  const ledgerClient = await nodeLedgerClinet.LedgerClient.init(config)
  await blockchainCaller.init(ledgerClient);
  await blockchainCaller.initChaincode();
  

};
main();
