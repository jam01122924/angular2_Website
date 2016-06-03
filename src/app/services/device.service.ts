import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent'; 

@Injectable()
export class DeviceService {
  width$: Observable<number>;
  height$: Observable<number>;
  constructor () {
    let windowSize$ = new BehaviorSubject(getWindowSize());
    this.width$ = windowSize$.pluck('width').distinctUntilChanged();
    this.height$ = windowSize$.pluck('height').distinctUntilChanged();
    Observable.fromEvent(window, 'resize')
      .map(getWindowSize)
      .subscribe(windowSize$);
  }
}

function getWindowSize() {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  };
}