import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SetupLocalComponent } from './setup-local.component';

describe('SetupLocalComponent', () => {
  let component: SetupLocalComponent;
  let fixture: ComponentFixture<SetupLocalComponent>;

  beforeEach(waitForAsync(() => {
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
