import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GitDeployComponent } from './git-deploy.component';

describe('GitDeployComponent', () => {
  let component: GitDeployComponent;
  let fixture: ComponentFixture<GitDeployComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GitDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
