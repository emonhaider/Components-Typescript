describe('users component', () => {
  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('users', () => {
      return {
        templateUrl: 'app/users.html'
      };
    });
  }));

  it('should...', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<users></users>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
