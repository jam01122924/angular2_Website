import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';
// import { FaComponent } from 'angular2-fontawesome/components';

import { MenuService } from '../../services/menu.service';
@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  directives: [MenuItemComponent, CollapseDirective],
  styleUrls: ['header.component.css'],
  inputs: ['w', 'h']
})
export class HeaderComponent implements OnInit {
	linksLeft: string[] = [];
	linksRight: string[] = [];
	h: number;
	w: number;
	menuExpend: boolean;
  constructor(private _ms: MenuService) { }

  ngOnInit() {
		this.linksLeft = [
			'home',
			'work',
			'gallery'
		];
		this.linksRight = [
			'charts',
			'games',
			'find-us'
		];
	}
	clickMenu() {
		this._ms.trigger();
	}

}
