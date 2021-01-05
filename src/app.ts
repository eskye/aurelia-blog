import { PLATFORM } from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router'; 
export class App {
  public message = 'Hello World!';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {route: '', moduleId: PLATFORM.moduleName('no-selection'), title: 'Select'},
      {route: 'contacts/:id', moduleId: PLATFORM.moduleName('contact-detail'), title: 'contacts'},
    ]);

    this.router = router;
  }
}
