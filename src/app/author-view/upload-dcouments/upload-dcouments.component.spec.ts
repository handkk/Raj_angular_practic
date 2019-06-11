import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDcoumentsComponent } from './upload-dcouments.component';

describe('UploadDcoumentsComponent', () => {
  let component: UploadDcoumentsComponent;
  let fixture: ComponentFixture<UploadDcoumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDcoumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDcoumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
