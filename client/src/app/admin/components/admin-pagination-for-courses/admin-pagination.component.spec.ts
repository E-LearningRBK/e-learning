import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaginationForCoursesComponent } from './admin-pagination.component';

describe('AdminPaginationComponent', () => {
  let component: AdminPaginationForCoursesComponent;
  let fixture: ComponentFixture<AdminPaginationForCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPaginationForCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPaginationForCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
