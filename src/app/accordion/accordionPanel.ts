class AccordionPanelController {
  public text: string;  
  public selected = false;
  constructor() {
    this.text = 'My brand new component!';    
  }

  $onInit() {    
    this.parent.addPanel(this);
  }

  turnOn() {    
    this.selected = true;
  }

  turnOff() {
    this.selected = false;    
  }

  select() {
    this.parent.selectPanel(this);    
  }
}

angular
  .module('app')
  .component('accordionPanel', {
    transclude: true,
    require: {
      'parent': '^accordion'
    },
    bindings: {
      heading: '@'
    },
    templateUrl: 'app/accordion/accordionPanel.html',
    controller: AccordionPanelController
  });

