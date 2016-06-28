describe('service maths', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(maths => {
    expect(maths).not.toEqual(null);
  }));

  describe('linear.unit', () => {
    it('should return 1 when given 1', inject(maths => {
      expect(maths.getFunctions().linear.unit(1)).toBe(1);
    }));

    it('should return 3 when given 3', inject(maths => {
      expect(maths.getFunctions().linear.unit(3)).toBe(3);
    }));
  });

  describe('linear.sum', () => {
    it('should return 1 when given 1', inject(maths => {
      expect(maths.getFunctions().linear.sum(1)).toBe(1);
      expect(maths.getSum()(maths.getFunctions().linear.unit)(1)).toBe(1);
    }));

    it('should return 6 when given 3', inject(maths => {
      expect(maths.getFunctions().linear.sum(3)).toBe(6);
      expect(maths.getSum()(maths.getFunctions().linear.unit)(3)).toBe(6);
    }));

    it('should return 10 when given 4', inject(maths => {
      expect(maths.getFunctions().linear.sum(4)).toBe(10);
      expect(maths.getSum()(maths.getFunctions().linear.unit)(4)).toBe(10);
    }));
  });

  describe('constant.unit', () => {
    it('should return 1 when given 1', inject(maths => {
      expect(maths.getFunctions().constant.unit(1)).toBe(1);
    }));

    it('should return 1 when given 3', inject(maths => {
      expect(maths.getFunctions().constant.unit(3)).toBe(1);
    }));
  });

  describe('constant.sum', () => {
    it('should return 2 when given 1', inject(maths => {
      expect(maths.getFunctions().constant.sum(1)).toBe(2);
      expect(maths.getSum()(maths.getFunctions().constant.unit)(1)).toBe(2);
    }));

    it('should return 4 when given 3', inject(maths => {
      expect(maths.getFunctions().constant.sum(3)).toBe(4);
      expect(maths.getSum()(maths.getFunctions().constant.unit)(3)).toBe(4);
    }));

    it('should return 5 when given 4', inject(maths => {
      expect(maths.getFunctions().constant.sum(4)).toBe(5);
      expect(maths.getSum()(maths.getFunctions().constant.unit)(4)).toBe(5);
    }));
  });

  describe('exponential.unit', () => {
    it('should return 2 when given 1', inject(maths => {
      expect(maths.getFunctions().exponential.unit(1)).toBe(2);
    }));

    it('should return 8 when given 3', inject(maths => {
      expect(maths.getFunctions().exponential.unit(3)).toBe(8);
    }));
  });

  // maths.sum is -1 because the 0th term is not counted in sum.
  describe('exponential.sum', () => {
    it('should return 3 when given 1', inject(maths => {
      expect(maths.getFunctions().exponential.sum(1)).toBe(3);
      expect(maths.getSum()(maths.getFunctions().exponential.unit)(1)).toBe(3);
    }));

    it('should return 15 when given 3', inject(maths => {
      expect(maths.getFunctions().exponential.sum(3)).toBe(15);
      expect(maths.getSum()(maths.getFunctions().exponential.unit)(3)).toBe(15);
    }));

    it('should return 31 when given 4', inject(maths => {
      expect(maths.getFunctions().exponential.sum(4)).toBe(31);
      expect(maths.getSum()(maths.getFunctions().exponential.unit)(4)).toBe(31);
    }));
  });

  describe('polynomial1_5.unit', () => {
    it('should return 1 when given 1', inject(maths => {
      expect(maths.getFunctions().polynomial1_5.unit(1)).toBe(1);
    }));

    it('should return ? when given 3', inject(maths => {
      expect(maths.getFunctions().polynomial1_5.unit(3)).toBe(6);
    }));
  });

  describe('polynomial1_5.sumApprox', () => {
    it('should return 2 when given 1', inject(maths => {
      expect(maths.getFunctions().polynomial1_5.sumApprox(1)).toBe(2);
      // ?!? don't know why first iteration is different, whereas other are identical
      expect(maths.getSum()(maths.getFunctions().polynomial1_5.unit)(1)).toBe(1);
    }));

    it('should return 10 when given 3', inject(maths => {
      expect(maths.getFunctions().polynomial1_5.sumApprox(3)).toBe(10);
      expect(maths.getSum()(maths.getFunctions().polynomial1_5.unit)(3)).toBe(10);
    }));

    it('should return 18 when given 4', inject(maths => {
      expect(maths.getFunctions().polynomial1_5.sumApprox(4)).toBe(18);
      expect(maths.getSum()(maths.getFunctions().polynomial1_5.unit)(4)).toBe(18);
    }));
  });

  describe('sum', () => {
    it('should return 30 when given exponential and 4', inject(maths => {
      expect(maths.getSum()(maths.getFunctions().exponential.unit)(4)).toBe(31);
    }));
  });
});
