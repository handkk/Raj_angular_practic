import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorViewComponent } from './author-view.component';

describe('AuthoerViewComponent', () => {
  let component: AuthorViewComponent;
  let fixture: ComponentFixture<AuthorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
