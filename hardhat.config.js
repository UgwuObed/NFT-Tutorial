require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/WlBvP8wMbrd8FPw-AWwka2Izn0WXocSs",
      accounts: [
        "8305f28a50f2bf161c9a0b1a4ecc991e7c235e0ff6979ff85933fc2d6724a836",
    
    ],
    },
  },
};

