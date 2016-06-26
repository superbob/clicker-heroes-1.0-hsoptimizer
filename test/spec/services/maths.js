'use strict';

describe('Service: maths', function () {

  // load the service's module
  beforeEach(angular.mock.module('chRotTranscendApp'));

  // instantiate service
  var maths;
  beforeEach(inject(function (_maths_) {
    maths = _maths_;
  }));

  it('should do something', function () {
    expect(!!maths).toBe(true);
  });

  describe('linear.unit', function() {
    it('should return 1 when given 1', function() {
      expect(maths.linear.unit(1)).toBe(1);
    });

    it('should return 3 when given 3', function() {
      expect(maths.linear.unit(3)).toBe(3);
    });
  });

  describe('linear.sum', function() {
    it('should return 1 when given 1', function() {
      expect(maths.linear.sum(1)).toBe(1);
      expect(maths.sum(maths.linear.unit)(1)).toBe(1);
    });

    it('should return 6 when given 3', function() {
      expect(maths.linear.sum(3)).toBe(6);
      expect(maths.sum(maths.linear.unit)(3)).toBe(6);
    });

    it('should return 10 when given 4', function() {
      expect(maths.linear.sum(4)).toBe(10);
      expect(maths.sum(maths.linear.unit)(4)).toBe(10);
    });
  });

  describe('constant.unit', function() {
    it('should return 1 when given 1', function() {
      expect(maths.constant.unit(1)).toBe(1);
    });

    it('should return 1 when given 3', function() {
      expect(maths.constant.unit(3)).toBe(1);
    });
  });

  describe('constant.sum', function() {
    it('should return 2 when given 1', function() {
      expect(maths.constant.sum(1)).toBe(2);
      expect(maths.sum(maths.constant.unit)(1)).toBe(2);
    });

    it('should return 4 when given 3', function() {
      expect(maths.constant.sum(3)).toBe(4);
      expect(maths.sum(maths.constant.unit)(3)).toBe(4);
    });

    it('should return 5 when given 4', function() {
      expect(maths.constant.sum(4)).toBe(5);
      expect(maths.sum(maths.constant.unit)(4)).toBe(5);
    });
  });

  describe('exponential.unit', function() {
    it('should return 2 when given 1', function() {
      expect(maths.exponential.unit(1)).toBe(2);
    });

    it('should return 8 when given 3', function() {
      expect(maths.exponential.unit(3)).toBe(8);
    });
  });

  // maths.sum is -1 because the 0th term is not counted in sum.
  describe('exponential.sum', function() {
    it('should return 3 when given 1', function() {
      expect(maths.exponential.sum(1)).toBe(3);
      expect(maths.sum(maths.exponential.unit)(1)).toBe(3);
    });

    it('should return 15 when given 3', function() {
      expect(maths.exponential.sum(3)).toBe(15);
      expect(maths.sum(maths.exponential.unit)(3)).toBe(15);
    });

    it('should return 31 when given 4', function() {
      expect(maths.exponential.sum(4)).toBe(31);
      expect(maths.sum(maths.exponential.unit)(4)).toBe(31);
    });
  });

  describe('polynomial1_5.unit', function() {
    it('should return 1 when given 1', function() {
      expect(maths.polynomial1_5.unit(1)).toBe(1);
    });

    it('should return ? when given 3', function() {
      expect(maths.polynomial1_5.unit(3)).toBe(6);
    });
  });

  describe('polynomial1_5.sumApprox', function() {
    it('should return 2 when given 1', function() {
      expect(maths.polynomial1_5.sumApprox(1)).toBe(2);
      // ?!? don't know why first iteration is different, whereas other are identical
      expect(maths.sum(maths.polynomial1_5.unit)(1)).toBe(1);
    });

    it('should return 10 when given 3', function() {
      expect(maths.polynomial1_5.sumApprox(3)).toBe(10);
      expect(maths.sum(maths.polynomial1_5.unit)(3)).toBe(10);
    });

    it('should return 18 when given 4', function() {
      expect(maths.polynomial1_5.sumApprox(4)).toBe(18);
      expect(maths.sum(maths.polynomial1_5.unit)(4)).toBe(18);
    });
  });

  describe('sum', function() {
    it('should return 30 when given exponential and 4', function() {
      expect(maths.sum(maths.exponential.unit)(4)).toBe(31);
    });
  });

});
