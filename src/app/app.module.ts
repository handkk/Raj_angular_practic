import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {MatStepperModule} from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxDatePickerModule } from "igniteui-angular";
import {MatCardModule} from '@angular/material/card';
// import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AuthorViewComponent } from './author-view/author-view.component';
import { MaterialModule } from './material/material.module';
import { MatSidenavModule, MatCheckboxModule } from '@angular/material';
// import { SectionOutlineComponent } from './section-outline/section-outline.component';
// import { RightMenuComponent } from './right-menu/right-menu.component';
import { UploadDcoumentsComponent } from './author-view/upload-dcouments/upload-dcouments.component';
import { FileDropModule } from 'ngx-file-drop';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { FlexCssComponent } from './flex-css/flex-css.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorViewComponent,
    // CommentDialogComponent,
    AuthorViewComponent,
    // SectionOutlineComponent,
    // RightMenuComponent,
    UploadDcoumentsComponent,
    // CkeditorComponent,
    FlexCssComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // CKEditorModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    IgxDatePickerModule,
    MaterialModule,
    MatSidenavModule,
    FileDropModule,
    HttpClientModule
    // SectionOutlineComponent
  ],
  // exports: [
  //   SectionOutlineComponent
  // ],
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    // DragDropModule,
    PortalModule,
    ScrollingModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent],
  entryComponents:[UploadDcoumentsComponent]
})
export class AppModule { }



