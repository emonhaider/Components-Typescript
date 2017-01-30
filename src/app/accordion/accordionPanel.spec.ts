describe('accordionPanel component', () => {
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('accordionPanel', () => {
      return {
        templateUrl: 'app/accordionPanel.html'
      };
    });
  }));

  it('should...', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<accordionPanel></accordionPanel>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
