module.exports.bitcoin = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80
}
module.exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef
}
module.exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef
}
module.exports.liquid = {
  messagePrefix: '\x18Liquid Signed Message:\n',
  bech32: 'ex',
  blech32: 'lq',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 57,
  scriptHash: 39,
  wif: 0x80,
  confidentialPrefix: 12,
  assetHash: '6f0279e9ed041c3d710a9f57d0c02928416460c4b722ae3457a11eec381c526d'
}
module.exports.liquidRegtest = {
  messagePrefix: '\x18Liquid Signed Message:\n',
  bech32: 'ert',
  blech32: 'el',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394
  },
  pubKeyHash: 235,
  scriptHash: 75,
  wif: 0xef,
  confidentialPrefix: 4,
  assetHash: '5ac9f65c0efcc4775e0baec4ec03abdde22473cd3cf33c0419ca290e0751b225'
}
