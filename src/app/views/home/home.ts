class HomeController {
  public text: string;

  constructor() {
    this.text = 'This is a home component!';
  }
}

angular
  .module('app')
  .component('home', {
    templateUrl: 'app/views/home/home.html',
    controller: HomeController
  });

