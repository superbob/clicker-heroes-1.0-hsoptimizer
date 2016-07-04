'use strict';

export default function units() {
  const suffixes = ['', 'K', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', 'd', 'U', 'D', '!', '@', '#', '$', '%', '^', '&', '*'];
  const formatScientificNotation = input => input.toExponential(3).replace('+', '');
  const formatWithSuffix = (input, order) => Math.round(input / Math.pow(1000, order)).toLocaleString('en-US') + suffixes[order];
  const formatWithoutSuffix = input => formatWithSuffix(input, 0);

  return function(input, scientificNotation = false) {
    if (scientificNotation) {
      if (input <= 100000) {
        return formatWithoutSuffix(input);
      }
      return formatScientificNotation(input);
    } else {
      let log10;
      if (typeof Math.log10 !== typeof undefined) {
        log10 = Math.log10;
      } else {
        log10 = x => Math.log(x) / Math.log(10);
      }

      const order = Math.max(Math.floor((log10(input) - 2) / 3), 0);
      if (order >= suffixes.length) {
        return formatScientificNotation(input);
      }

      const formatWithSuffix = (input, order) => Math.round(input / Math.pow(1000, order)).toLocaleString('en-US') + suffixes[order];
      return formatWithSuffix(input, order);
    }
  }
}
