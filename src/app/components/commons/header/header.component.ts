import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private shareDataService: ShareDataService) {}
  private toggle = true;

  ngOnInit(): void {}

  onClickToggle() {
    this.shareDataService.sideBar.next(this.toggle);
    this.toggle = !this.toggle;
  }
}
