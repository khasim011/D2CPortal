import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSimulatorStatusComponent } from './red-simulator-status.component';

describe('RedSimulatorStatusComponent', () => {
  let component: RedSimulatorStatusComponent;
  let fixture: ComponentFixture<RedSimulatorStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedSimulatorStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedSimulatorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
