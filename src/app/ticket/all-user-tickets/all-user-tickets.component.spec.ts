import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserTicketsComponent } from './all-user-tickets.component';

describe('AllUserTicketsComponent', () => {
  let component: AllUserTicketsComponent;
  let fixture: ComponentFixture<AllUserTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUserTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
