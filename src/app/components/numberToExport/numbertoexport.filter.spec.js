'use strict';

describe('filter numberToExport', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(numberToExportFilter => {
    expect(numberToExportFilter).not.toEqual(null);
  }));

  it('should return 0 when given 0', inject(numberToExportFilter => {
    expect(numberToExportFilter(0)).toBe('0');
  }));

  it('should return 100000000000000000000 when given 1e20', inject(numberToExportFilter => {
    expect(numberToExportFilter(1e20)).toBe('100000000000000000000');
  }));

  it('should return 100000000000e10 when given 1e21', inject(numberToExportFilter => {
    expect(numberToExportFilter(1e21)).toBe('100000000000e10');
  }));

  it('should return 123000000000e10 when given 123e19', inject(numberToExportFilter => {
    expect(numberToExportFilter(123e19)).toBe('123000000000e10');
  }));

  it('should return 1200000000000e10 when given 1.2e22', inject(numberToExportFilter => {
    expect(numberToExportFilter(1.2e22)).toBe('1200000000000e10');
  }));

  it('should return 100000000000e30 when given 1e41', inject(numberToExportFilter => {
    expect(numberToExportFilter(1e41)).toBe('100000000000e30');
  }));
});
