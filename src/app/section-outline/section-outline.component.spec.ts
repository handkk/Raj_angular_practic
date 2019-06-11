import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOutlineComponent } from './section-outline.component';

describe('SectionOutlineComponent', () => {
  let component: SectionOutlineComponent;
  let fixture: ComponentFixture<SectionOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
