'use strict';

describe('filter units', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(unitsFilter => {
    expect(unitsFilter).not.toEqual(null);
  }));

  it('should return 0 when given 0', inject(unitsFilter => {
    expect(unitsFilter(0)).toBe('0');
  }));

  it('should return 10 when given 10', inject(unitsFilter => {
    expect(unitsFilter(10)).toBe('10');
  }));

  it('should return 1,000 when given 1 000', inject(unitsFilter => {
    expect(unitsFilter(1000)).toBe('1,000');
  }));

  it('should return 10,000 when given 10 000', inject(unitsFilter => {
    expect(unitsFilter(10000)).toBe('10,000');
  }));

  it('should return 100K when given 100 000', inject(unitsFilter => {
    expect(unitsFilter(100000)).toBe('100K');
  }));

  it('should return 100K when given 100 100', inject(unitsFilter => {
    expect(unitsFilter(100100)).toBe('100K');
  }));

  it('should return 101K when given 100 500', inject(unitsFilter => {
    expect(unitsFilter(100500)).toBe('101K');
  }));

  it('should return 101K when given 101 000', inject(unitsFilter => {
    expect(unitsFilter(101000)).toBe('101K');
  }));

  it('should return 1,000K when given 1 000 000', inject(unitsFilter => {
    expect(unitsFilter(1000000)).toBe('1,000K');
  }));

  it('should return 100M when given 100 000 000', inject(unitsFilter => {
    expect(unitsFilter(100000000)).toBe('100M');
  }));

  it('should return 100B when given 100 000 000 000', inject(unitsFilter => {
    expect(unitsFilter(100000000000)).toBe('100B');
  }));

  it('should return 10,000# when given 1e52', inject(unitsFilter => {
    expect(unitsFilter(1e52)).toBe('10,000#');
  }));

  it('should return 100* when given 1e65', inject(unitsFilter => {
    expect(unitsFilter(1e65)).toBe('100*');
  }));

  it('should return 10,000* when given 1e67', inject(unitsFilter => {
    expect(unitsFilter(1e67)).toBe('10,000*');
  }));

  it('should return 1.000e68 when given 1e68', inject(unitsFilter => {
    expect(unitsFilter(1e68)).toBe('1.000e68');
  }));

});
