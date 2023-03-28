import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthFlightsComponent } from './unauth-flights.component';

describe('UnauthFlightsComponent', () => {
  let component: UnauthFlightsComponent;
  let fixture: ComponentFixture<UnauthFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
