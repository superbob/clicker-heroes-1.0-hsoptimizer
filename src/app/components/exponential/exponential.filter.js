'use strict';

export default function exponential() {
  return function(input, limit=100000) {
    console.log(input);
    if (input <= limit) {
      return input.toLocaleString();
    }
    return input.toExponential();
  }
}
