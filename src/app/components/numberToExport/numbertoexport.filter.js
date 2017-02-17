'use strict';

export default function numberToExport() {
  const limit = 1e20;

  const getLog10 = () => {
    if (typeof Math.log10 !== typeof undefined) {
      return Math.log10;
    } else {
      return x => Math.log(x) / Math.log(10);
    }
  };

  const integralScientificNotation = input => {
    const log10 = getLog10();
    const exponent = Math.floor(log10(input));
    const integralExponent = exponent - 10;
    const integralSignificand = Math.floor(input / Math.pow(10, integralExponent));
    return integralSignificand + "e" + integralExponent;
  };

  return function(input) {
    if (input > limit) {
      return integralScientificNotation(input);
    }

    return input.toString();
  }
}
