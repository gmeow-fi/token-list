const { version } = require('../package.json');
const zircuitTestnet = require('./constants/tokenLists/zircuit_testnet.tokenlist.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  const l1List = {
    name: 'GMeowFi Default',
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: '',
    keywords: ['gmeowfi', 'default'],
    tokens: [...zircuitTestnet.tokens]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return l1List;
};