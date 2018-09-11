const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const isPrime = event.detail;
    this.displayResult(isPrime);

  })};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
    if (result === true) {
    resultElement.textContent = `Number is prime!`;
  } else {
    resultElement.textContent = `Number is not prime!`;
  };
};

module.exports = ResultView;
