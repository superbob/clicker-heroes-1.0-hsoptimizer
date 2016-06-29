'use strict';

export default function exponential() {
  return function(input, limit=100000) {
    if (input <= limit) {
      return input.toLocaleString();
    }
    return input.toExponential();
  }
}
