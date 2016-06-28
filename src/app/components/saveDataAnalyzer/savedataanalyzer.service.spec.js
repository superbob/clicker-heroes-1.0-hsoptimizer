'use strict';

describe('Service: saveDataAnalyzer', function () {

  // load the service's module
  beforeEach(angular.mock.module('chRotTranscendApp'));

  // instantiate service
  var saveDataAnalyzer;
  beforeEach(inject(function (_saveDataAnalyzer_) {
    saveDataAnalyzer = _saveDataAnalyzer_;
  }));

  it('should do something', function () {
    expect(!!saveDataAnalyzer).toBe(true);
  });

});
