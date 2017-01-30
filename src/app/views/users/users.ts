class User {
  constructor(
    public name: string,
    public city: string,
    public country: string
  ) { }
}
class UsersController {
  public text: string;
  public users: User[];
  constructor() {
    this.text = 'My brand new component!';
    this.users = [
      {
        name: 'Jack Smith',
        city: 'Berlin',
        country: 'Germany'
      }, {
        name: 'Zach David',
        city: 'New York',
        country: 'USA'
      }
    ];
  }
}

angular
  .module('app')
  .component('users', {
    templateUrl: 'app/views/users/users.html',
    controller: UsersController
  });

