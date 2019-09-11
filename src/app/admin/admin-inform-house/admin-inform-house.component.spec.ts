import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformHouseComponent } from './admin-inform-house.component';

describe('AdminInformHouseComponent', () => {
  let component: AdminInformHouseComponent;
  let fixture: ComponentFixture<AdminInformHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInformHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInformHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
