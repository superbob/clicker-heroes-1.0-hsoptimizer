'use strict';

describe('service saveDataAnalyzer', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(saveDataAnalyzer => {
    expect(saveDataAnalyzer).not.toEqual(null);
  }));

});
