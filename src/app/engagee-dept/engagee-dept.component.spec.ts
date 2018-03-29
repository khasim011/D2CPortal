import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageeDeptComponent } from './engagee-dept.component';

describe('EngageeDeptComponent', () => {
  let component: EngageeDeptComponent;
  let fixture: ComponentFixture<EngageeDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngageeDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageeDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
