module.exports = {
    env: process.env.NODE_ENV,
    web3: {
      uri: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_RPC_URL_TEST : process.env.REACT_APP_RPC_URL,
      campaignManager: process.env.REACT_APP_WEB3_CM
    },
    moralis: {
      appId: process.env.REACT_APP_MORALIS_APPID,
      server: process.env.REACT_APP_MORALIS_SERVER,
    },
    opensea: {
      uri: process.env.REACT_APP_OS,
    },
    nametag: {
      uri: process.env.REACT_APP_NT,
    }
  };