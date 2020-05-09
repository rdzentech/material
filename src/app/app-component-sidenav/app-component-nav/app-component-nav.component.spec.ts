import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentNavComponent } from './app-component-nav.component';

describe('AppComponentNavComponent', () => {
  let component: AppComponentNavComponent;
  let fixture: ComponentFixture<AppComponentNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
