'use strict';

describe('Service: mechanics', function () {

  // load the service's module
  beforeEach(angular.mock.module('chRotTranscendApp'));

  // instantiate service
  var mechanics;
  beforeEach(inject(function (_mechanics_) {
    mechanics = _mechanics_;
  }));

  it('should do something', function () {
    expect(!!mechanics).toBe(true);
  });

  describe('getAncientNameById', function() {
    it('should return Solomon when given 3', function() {
      expect(mechanics.getAncientNameById('3')).toBe('Solomon');
    });

    it('should return Kumawakamaru when given 21', function() {
      expect(mechanics.getAncientNameById('21')).toBe('Kumawakamaru');
    });
  });

  describe('getOutsiderNameById', function() {
    it('should return Chor\'gorloth when given 2', function() {
      expect(mechanics.getOutsiderNameById('2')).toBe('Chor\'gorloth');
    });

    it('should return Phandoryss when given 3', function() {
      expect(mechanics.getOutsiderNameById('3')).toBe('Phandoryss');
    });
  });

  describe('getAncientUpgradeCost', function() {
    it('should return 50 when given Siyalatas and 1 to 10', function() {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 10)).toBe(54);
    });

    it('should return 50 when given Solomon and 1 to 100', function() {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 100)).toBe(40500);
    });
  });

});
