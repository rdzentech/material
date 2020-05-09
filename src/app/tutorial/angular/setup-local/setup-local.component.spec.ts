import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupLocalComponent } from './setup-local.component';

describe('SetupLocalComponent', () => {
  let component: SetupLocalComponent;
  let fixture: ComponentFixture<SetupLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
