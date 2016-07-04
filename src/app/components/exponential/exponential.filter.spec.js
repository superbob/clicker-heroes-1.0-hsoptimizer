'use strict';

describe('filter exponential', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(exponentialFilter => {
    expect(exponentialFilter).not.toEqual(null);
  }));

  it('should be return 1 when given 1', inject(exponentialFilter => {
    expect(exponentialFilter(1)).toBe("1");
  }));

  it('should be return 100000 when given 100000', inject(exponentialFilter => {
    expect(exponentialFilter(100000)).toBe("100,000");
  }));

  it('should be return 1e6 when given 1000000', inject(exponentialFilter => {
    expect(exponentialFilter(1000000)).toBe("1.000e6");
  }));

  it('should be return 1e6 when given 123451234512345', inject(exponentialFilter => {
    expect(exponentialFilter(123451234512345)).toBe("1.235e14");
  }));
});
