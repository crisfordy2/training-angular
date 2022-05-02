import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.component.html',
  styleUrls: ['./component-sidenav.component.scss'],
})
export class ComponentSidenavComponent implements OnInit {
  @ViewChild('sidenav') prueba: any;
  optionSideBar: number = 1;

  constructor(private shareDataService: ShareDataService) {
    console.log('INICIO EL CONSTRUCTOR');
    this.abrir();
  }

  ngOnInit(): void {}

  abrir(): void {
    this.shareDataService.sideBar.subscribe(() => this.prueba.toggle());
  }
}
