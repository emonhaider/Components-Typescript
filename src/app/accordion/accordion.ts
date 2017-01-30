class AccordionController {
  public text: string; 
  public panels: AccordionPanelController[] = []; 
  constructor() {
    this.text = 'My brand new component!';    
  }

  addPanel(panel: AccordionPanelController) {
    this.panels.push(panel);
    if (this.panels.length > 0) {
      this.panels[0].turnOn();
    }
  }

  selectPanel(panel: AccordionPanelController) {
    for (var p in this.panels) {
      if (panel === this.panels[p]) {
        this.panels[p].turnOn();
      } else {
        this.panels[p].turnOff();
      }
    }
  }
}

angular
  .module('app')
  .component('accordion', {
    transclude: true,
    templateUrl: 'app/accordion/accordion.html',
    controller: AccordionController
  });

