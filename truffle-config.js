const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/lib/contracts"),
  compilers:{
    solc: {
      version: "pragma",
    }
  },
  networks: {
    develop: {
      port: 8545
    }
  }
};
