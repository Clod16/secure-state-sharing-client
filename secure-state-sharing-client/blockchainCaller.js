const config = require("config-fabric-network.json");

/* var ledgerClient;

const ledger = async () => {
  ledgerClient = await nodeLedgerClient.LedgerClient.init(config);
};
ledger();
async function callBlockchain(entity) {

  if(!this.ledgerClient)
  
}

module.exports.callBlockchain = callBlockchain;
 */


class BlockchainCaller {
  constructor() { }
  init(ledgerClient) {
      this.ledgerClient = ledgerClient;
  }

  async initChaincode() {
      try {
          return await this.ledgerClient.doInvoke("Init", []);
      }
      catch (err) {
          log.logger.error(err);
          throw new Error(err);
      }
  }
}
exports.blockchainCaller = new BlockchainCaller();
//# sourceMappingURL=EventGeneratorInput.js.map