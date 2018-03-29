import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolServicesComponent } from './tool-services.component';

describe('ToolServicesComponent', () => {
  let component: ToolServicesComponent;
  let fixture: ComponentFixture<ToolServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
