import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentViewerComponent } from './app-component-viewer.component';

describe('AppComponentViewerComponent', () => {
  let component: AppComponentViewerComponent;
  let fixture: ComponentFixture<AppComponentViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
