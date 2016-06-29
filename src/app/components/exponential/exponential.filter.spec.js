'use strict';

describe('filter exponential', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(exponentialFilter => {
    expect(exponentialFilter).not.toEqual(null);
  }));

});
