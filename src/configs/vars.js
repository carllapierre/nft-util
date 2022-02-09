module.exports = {
    env: process.env.NODE_ENV,
    web3: {
      uri: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_RPC_URL_TEST : process.env.REACT_APP_RPC_URL,
      campaignManager: process.env.REACT_APP_WEB3_CM
    }
  };