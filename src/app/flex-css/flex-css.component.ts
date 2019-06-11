import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-flex-css',
  templateUrl: './flex-css.component.html',
  styleUrls: ['./flex-css.component.scss']
})
export class FlexCssComponent implements OnInit {

  clicked: boolean = false;
  public files: UploadFile[] = [];
  uploadFile: any;

  constructor() { }

  ngOnInit() {
  }

  increaseWidth() {
    this.clicked = !this.clicked;
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.uploadFile = file;
          console.log(droppedFile.relativePath, this.uploadFile);
        });
      }
    }
  }

}
