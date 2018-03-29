import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentServicesComponent } from './environment-services.component';

describe('EnvironmentServicesComponent', () => {
  let component: EnvironmentServicesComponent;
  let fixture: ComponentFixture<EnvironmentServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
