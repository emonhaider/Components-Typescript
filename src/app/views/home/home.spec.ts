describe('home component', () => {
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('home', () => {
      return {
        templateUrl: 'app/home.html'
      };
    });
  }));

  it('should...', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<home></home>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
