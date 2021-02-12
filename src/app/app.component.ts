import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About', url: '/about/About', icon: 'business' },
    { title: 'Contact', url: '/contact/Contact', icon: 'mail' },
    { title: 'Skills', url: '/skills/Skills', icon: 'school' },
    { title: 'News', url: '/news/News', icon: 'today' },
    { title: 'Demo', url: '/demo/Demo', icon: 'save' },
  ];
  public labels = ['Leonardo Mantineo', 'Luca Benvegnu', 'Alesssandro Sipala'];
  constructor() {}
}
