import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaginationForUsersComponent } from './admin-pagination-for-users.component';

describe('AdminPaginationForUsersComponent', () => {
  let component: AdminPaginationForUsersComponent;
  let fixture: ComponentFixture<AdminPaginationForUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPaginationForUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPaginationForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
