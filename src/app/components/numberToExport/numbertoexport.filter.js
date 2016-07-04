'use strict';

export default function numberToExport() {
  const limit1 = 1e20;
  const factor1 = 1e10;
  const limit2 = 1e40;
  const factor2 = 1e30;

  return function(input) {
    if (input > limit2) {
      return Math.floor(input / factor2) + "e30";
    }
    if (input > limit1) {
      return Math.floor(input / factor1) + "e10";
    }
    return input.toString();
  }
}
