import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
// import { MatStepper } from '@angular/material/stepper';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-dcouments',
  templateUrl: './upload-dcouments.component.html',
  styleUrls: ['./upload-dcouments.component.scss']
})
export class UploadDcoumentsComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public files: UploadFile[] = [];
  fileName: string;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      file: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    this.fileName = this.files[0].fileEntry.name;
    this.firstFormGroup.value.file = this.fileName;
    console.log('file uploaded ', this.files)
  }

  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }

  moveToComment(stepper: MatStepper) {
    if (this.firstFormGroup.value.file !== '') {
      stepper.next();
    }
  }

  onSubmit() {
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
