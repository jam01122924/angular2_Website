import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-selfie',
  templateUrl: 'selfie.component.html',
  styleUrls: ['selfie.component.css'],
  directives: [CAROUSEL_DIRECTIVES],
  inputs: ['w', 'h']
})
export class SelfieComponent implements OnInit {
	w: number;
	h: number;
	selfieImg : Array<string> = [
		'intro',
		'thoughts',
		'workBench',
		'product'
	]
  slides: Array<any> = [];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  addSlide(): void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `/img/selfie/` + this.selfieImg[this.slides.length % 4] + '.jpg',
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  ngOnInit() {
  }

}
