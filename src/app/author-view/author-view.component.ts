import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadDcoumentsComponent } from './upload-dcouments/upload-dcouments.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.scss']
})
export class AuthorViewComponent implements OnInit {



  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const saveData = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, w. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, w.';
    saveAs(saveData, 'data.doc');
  }

  printPage() {
    window.print();
  }

  uploadDoc() {
    const dialogRef = this.dialog.open(UploadDcoumentsComponent, {
      width: 'auto',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  //   //print method-2 for a format
  //   print(): void {
  //     let printContents, popupWin;
  //     printContents = document.getElementById('print-section').innerHTML;
  //     popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  //     popupWin.document.open();
  //     //this is where we give the format for the print
  //     popupWin.document.write(`
  //       <html>
  //         <head>
  //           <title>Print tab</title>
  //           <style>
  //           //........Customized style.......
  //           </style>
  //         </head>
  //     <body onload="window.print();window.close()">${printContents}</body>
  //       </html>`
  //     );
  //     popupWin.document.close();
  // }

}



