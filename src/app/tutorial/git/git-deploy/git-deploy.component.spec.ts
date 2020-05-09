import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitDeployComponent } from './git-deploy.component';

describe('GitDeployComponent', () => {
  let component: GitDeployComponent;
  let fixture: ComponentFixture<GitDeployComponent>;

  beforeEach(async(() => {
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
