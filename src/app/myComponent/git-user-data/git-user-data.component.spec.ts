import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserDataComponent } from './git-user-data.component';

describe('GitUserDataComponent', () => {
  let component: GitUserDataComponent;
  let fixture: ComponentFixture<GitUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitUserDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
