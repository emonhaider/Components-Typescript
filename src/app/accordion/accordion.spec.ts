describe('accordion component', () => {
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('accordion', () => {
      return {
        templateUrl: 'app/accordion.html'
      };
    });
  }));

  it('should...', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<accordion></accordion>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
