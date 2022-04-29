const Box = artifacts.require("./Box.sol");
const BoxV1 = artifacts.require("./Box_v1.sol");
const BoxV2 = artifacts.require("./Box_v2.sol");


module.exports = function(deployer) {
  deployer.deploy(Box);
  deployer.deploy(BoxV1);
  deployer.deploy(BoxV2);
};



