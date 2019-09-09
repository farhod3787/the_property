import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeListComponent } from './admin-home-list.component';

describe('AdminHomeListComponent', () => {
  let component: AdminHomeListComponent;
  let fixture: ComponentFixture<AdminHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
