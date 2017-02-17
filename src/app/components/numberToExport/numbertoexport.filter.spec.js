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

  it('should return 12300000000e11 when given 123e19', inject(numberToExportFilter => {
    expect(numberToExportFilter(123e19)).toBe('12300000000e11');
  }));

  it('should return 12000000000e12 when given 1.2e22', inject(numberToExportFilter => {
    expect(numberToExportFilter(1.2e22)).toBe('12000000000e12');
  }));

  it('should return 10000000000e31 when given 1e41', inject(numberToExportFilter => {
    expect(numberToExportFilter(1e41)).toBe('10000000000e31');
  }));

  it('should return 100000000000e20 when given 1e31', inject(numberToExportFilter => {
    expect(numberToExportFilter(1e31)).toBe('100000000000e20');
  }));

  it('should return 50091790451e83 when given 5.0091790451207075e93', inject(numberToExportFilter => {
    expect(numberToExportFilter(5.0091790451207075e93)).toBe('50091790451e83');
  }));
});
