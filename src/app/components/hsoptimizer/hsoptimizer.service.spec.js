'use strict';

describe('service hsoptimizer', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(hsoptimizer => {
    expect(hsoptimizer).not.toEqual(null);
  }));

});
