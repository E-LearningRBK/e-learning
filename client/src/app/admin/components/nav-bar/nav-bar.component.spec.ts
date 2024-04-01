import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navBarComponent } from './nav-bar.component';

describe('navBarComponent', () => {
  let component: navBarComponent;
  let fixture: ComponentFixture<navBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [navBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(navBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
