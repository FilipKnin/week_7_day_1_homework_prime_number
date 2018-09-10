const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};

PrimeChecker.prototype.checkPrime = function (number) {
  const result = null;
    function isPrime(number) {
      for(let i = 2; i < number; i++)
      if (number % i === 0) {
        result = false;
      } else {
        result = true;
      };
    };
  return result;
};




module.exports = PrimeChecker;
