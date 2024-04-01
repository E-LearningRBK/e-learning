import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoursesForAdminComponent } from './all-courses-for-admin.component';

describe('AllCoursesForAdminComponent', () => {
  let component: AllCoursesForAdminComponent;
  let fixture: ComponentFixture<AllCoursesForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCoursesForAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCoursesForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
