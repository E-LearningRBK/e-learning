import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCourseForAdminComponent } from './update-course-for-admin.component';

describe('UpdateCourseForAdminComponent', () => {
  let component: UpdateCourseForAdminComponent;
  let fixture: ComponentFixture<UpdateCourseForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCourseForAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCourseForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
