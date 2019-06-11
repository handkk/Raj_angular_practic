import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  width: number = 100;
  openedSection: boolean = false;

  constructor() {}

  ngOnInit() {}

  widthAdjust() {
    console.log('opened ', this.openedSection);
    this.openedSection = !this.openedSection;
    if (this.openedSection == true) {
      this.width = 340;
    } else {
      this.width = 85;
    }
    
  }

}
