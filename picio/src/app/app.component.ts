import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
},
    
    {
      title: 'Cadcarro',
      url: '/cadcarro',
      icon: 'car'
    },
    {
      title: 'João Mental',
      url: '/joaodoidao',
      icon: 'jet'
    },
    {
      title: 'Cadastro Profissional',
      url: '/cadprofissional',
      icon: 'list'
    },
    {
      title: 'Cadastro Cliente',
      url: '/cad-cliente',
      icon: 'bluetooth'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
