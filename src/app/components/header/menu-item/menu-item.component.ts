import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-menu-item',
  templateUrl: 'menu-item.component.html',
  styleUrls: ['menu-item.component.css'],
  directives: [ROUTER_DIRECTIVES],
  inputs: ['menuItem', 'w', 'h']
})

export class MenuItemComponent implements OnInit {
	w: number;
	h: number;
	menuItem: string;
	menuName: string;
	imgUrl: string;
	routeUrl: string;
  constructor() { }

  ngOnInit() {
		this.menuName = this.menuItem.toUpperCase();
		this.imgUrl = 'imgs/head/head-icon-' + this.menuItem + '.png';
		this.routeUrl = '/' + this.menuItem;
  }

}
