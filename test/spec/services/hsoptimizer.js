'use strict';

describe('Service: hsoptimizer', function () {

  // load the service's module
  beforeEach(angular.mock.module('chRotTranscendApp'));

  // instantiate service
  var hsoptimizer;
  beforeEach(inject(function (_hsoptimizer_) {
    hsoptimizer = _hsoptimizer_;
  }));

  it('should do something', function () {
    expect(!!hsoptimizer).toBe(true);
  });

});
