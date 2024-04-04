import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropAdminComponent } from './drop-admin.component';

describe('DropAdminComponent', () => {
  let component: DropAdminComponent;
  let fixture: ComponentFixture<DropAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
