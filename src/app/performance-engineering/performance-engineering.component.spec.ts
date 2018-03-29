import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceEngineeringComponent } from './performance-engineering.component';

describe('PerformanceEngineeringComponent', () => {
  let component: PerformanceEngineeringComponent;
  let fixture: ComponentFixture<PerformanceEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
