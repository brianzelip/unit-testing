function getAmount(coinType) {
  const coins = {
    p: 1,
    n: 5,
    d: 10,
    q: 25
  };

  return coins.hasOwnProperty(coinType)
    ? coins[coinType]
    : (function() {
        throw new Error(`Unrecognized coin ${coinType}`);
      })();
}

exports.getAmount = getAmount;
