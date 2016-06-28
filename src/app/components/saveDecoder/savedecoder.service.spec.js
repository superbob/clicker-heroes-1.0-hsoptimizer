'use strict';

describe('service saveDecoder', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(saveDecoder => {
    expect(saveDecoder).not.toEqual(null);
  }));

});
