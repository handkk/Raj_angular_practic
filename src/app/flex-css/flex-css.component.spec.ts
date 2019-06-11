import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexCssComponent } from './flex-css.component';

describe('FlexCssComponent', () => {
  let component: FlexCssComponent;
  let fixture: ComponentFixture<FlexCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
