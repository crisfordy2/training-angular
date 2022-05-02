import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  public sideBar = new Subject();

  constructor() {
    this.sideBar.next(true);
  }
}
