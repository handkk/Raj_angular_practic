import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-section-outline',
  templateUrl: './section-outline.component.html',
  styleUrls: ['./section-outline.component.scss']
})
export class SectionOutlineComponent implements OnInit {

  events: string[] = [];
  opened: boolean = true;
  width: number = 90;
  openedSection: boolean = false;
  SectionsList: any[] = [
    {
      'number': 1,
      'text': 'First Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'section_assigned': false
    },
    {
      'number': 2,
      'text': 'Second Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'section_assigned': true
    },
    {
      'number': 3,
      'text': 'Third Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'section_assigned': false
    },
    {
      'number': 4,
      'text': 'Third Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'section_assigned': true
    }
  ];

  constructor(private appService: AppService) {}

  ngOnInit() {
  }

  widthAdjust() {
    console.log('opened ', this.openedSection);
    this.openedSection = !this.openedSection;
    if (this.openedSection === true) {
      this.width = 300;
    } else {
      this.width = 90;
    }
  }

  onMethods() {
    this.opened = !this.opened;
  }

  sectionSelection(SL,SLI) {
    this.appService.SectionSelected.emit(SLI);
  }

  // all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // even = [10];

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  // /** Predicate function that only allows even numbers to be dropped into a list. */
  // evenPredicate(item: cdkDrag<number>) {
  //   return item.data % 2 === 0;
  // }

  // /** Predicate function that doesn't allow items to be dropped into a list. */
  // noReturnPredicate() {
  //   return false;
  // }
}
// // export class SectionOutlineComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit() {
// //   }

// }
