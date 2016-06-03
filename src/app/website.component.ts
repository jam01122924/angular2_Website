import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { HomeComponent } from './ui/home/home.component';
import { WorkComponent } from './ui/work/work.component';
import { GamesComponent } from './ui/games/games.component';
import { HeaderComponent } from './components/header/header.component';

import { DeviceService } from './services/device.service';
import { MenuService } from './services/menu.service';

@Component({
  moduleId: module.id,
  selector: 'website-app',
  templateUrl: 'website.component.html',
  directives: [ROUTER_DIRECTIVES, HomeComponent, HeaderComponent, WorkComponent, GamesComponent],
  styleUrls: ['website.component.css'],
  providers: [MenuService]
})

@Routes([
	{ path: '/home', component: HomeComponent },
  { path: '/work', component: WorkComponent },
  { path: '/games', component: GamesComponent },
	{ path: '*', component: HomeComponent },
])

export class WebsiteAppComponent implements OnInit {
	h: number;
	w: number;
  constructor(private _ds: DeviceService, private _ms: MenuService) { }

  ngOnInit() {
		this._ds.height$.subscribe(data => this.h = data);
		this._ds.width$.subscribe(data => this.w = data);
  }
}
