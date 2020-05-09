import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentSidenavComponent } from './app-component-sidenav.component';

describe('AppComponentSidenavComponent', () => {
  let component: AppComponentSidenavComponent;
  let fixture: ComponentFixture<AppComponentSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
