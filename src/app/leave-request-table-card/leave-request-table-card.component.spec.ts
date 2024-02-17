import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestTableCardComponent } from './leave-request-table-card.component';

describe('LeaveRequestTableCardComponent', () => {
  let component: LeaveRequestTableCardComponent;
  let fixture: ComponentFixture<LeaveRequestTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveRequestTableCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveRequestTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
