import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersForAdminComponent } from './all-users-for-admin.component';

describe('AllUsersForAdminComponent', () => {
  let component: AllUsersForAdminComponent;
  let fixture: ComponentFixture<AllUsersForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllUsersForAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllUsersForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
