import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserRepoDataComponent } from './git-user-repo-data.component';

describe('GitUserRepoDataComponent', () => {
  let component: GitUserRepoDataComponent;
  let fixture: ComponentFixture<GitUserRepoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitUserRepoDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitUserRepoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
