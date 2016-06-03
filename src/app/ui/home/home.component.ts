import { Component, OnInit } from '@angular/core';
import { SelfieComponent } from '../../components/selfie/selfie.component';

import { DeviceService } from '../../services/device.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [SelfieComponent],
  inputs: ['w', 'h']
})
export class HomeComponent implements OnInit {
	w: number;
	h: number;
	bgImg: Array<string> = [
		'intro',
		'thoughts',
		'workBench',
		'product'
	]

  constructor(private _ds: DeviceService) { }

  ngOnInit() {
		this._ds.height$.subscribe(data => this.h = data);
		this._ds.width$.subscribe(data => this.w = data);
  }

}
