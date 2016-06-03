///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { WebsiteAppComponent, environment } from './app/';
// service:
import { DeviceService } from './app/services/device.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(WebsiteAppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	DeviceService
]);
