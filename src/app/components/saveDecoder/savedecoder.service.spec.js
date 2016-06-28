'use strict';

describe('Service: saveDecoder', function () {

  // load the service's module
  beforeEach(angular.mock.module('chRotTranscendApp'));

  // instantiate service
  var saveDecoder;
  beforeEach(inject(function (_saveDecoder_) {
    saveDecoder = _saveDecoder_;
  }));

  it('should do something', function () {
    expect(!!saveDecoder).toBe(true);
  });

});
