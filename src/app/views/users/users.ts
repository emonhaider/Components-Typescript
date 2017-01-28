class UsersController {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

angular
  .module('app')
  .component('users', {
    templateUrl: 'app/views/users/users.html',
    controller: UsersController
  });

