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

});
