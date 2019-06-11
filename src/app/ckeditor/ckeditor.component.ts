import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as ClassicEditor from "../plugins/ckeditor.js";
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {

  title = "lib-poc";
  public Editor = ClassicEditor;
  public model = {
    editorData: "<p> Hello, World!</p> "
  };

  myDate: any;
  heading: any;
  version: number = 1;
  constructor(public dialog: MatDialog, private http: HttpClient, private appService: AppService) {
    this.autoSave();
    this.heading =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, w";
    ClassicEditor.defaultConfig = {
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "link",
        "bulletedlist",
        "numberedList",
        "alignment",
        "imageupload",
        "insertTables",
        "mediaEmbed",
        "undo",
        "redo",
        "clipboard",
        "subscript",
        "superscript",
        "mathpreview"
      ]
    };
    this.appService.SectionSelected.subscribe(
      data => {
        console.log('Section index ', data);
        let element = document.getElementById(data);
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    )
  }

  ngOnInit() {
    console.log('ngOnIntiasdf')
    const id = '3eb89625-694b-4653-8f82-830f96918a87';
    this.appService.getDocumentInfo(id).subscribe(
      res => {
        console.log('Success Response ', res);
      }, err => {
        console.log('Error Response ', err);
      }
    )
  }

  printPage() {
    window.print();
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
//           //........Customize the style here.......
//           </style>
//         </head>
//     <body onload="window.print();window.close()">${printContents}</body>
//       </html>`
//     );
//     popupWin.document.close();
// }

  autoSave() {
    setInterval(() => {
      console.log("there", this.model.editorData);
      localStorage.setItem('EditorData', JSON.stringify(this.model.editorData));
      this.getSavedDate();
    }, 5000);
    // 300000 sec -->to save data temp for every 5 mins
  }

  getSavedDate() {
    this.myDate = new Date();
    console.log(this.myDate);
  }

  getVersionSavedData() {
    this.myDate = new Date();
    this.version = this.version + 1;
    console.log(this.version);
  }

  // To check the two-way binding in the colsole.log() method.
  checkChange() {
    console.log(this.model.editorData);
  }

  ngAfterViewInit() {
    console.log("afterviewinit");
  }

  onSaveVersion() {
    let IssueBody = {
      'name': '',
      'file': ''
    };
    const url = '/createissue';
    this.http.post(url, IssueBody)
      .subscribe(
        res => {
          console.log('Response ', res);
        },
        err => {
          console.log('Response ', err);
        }
      );
  }

}
