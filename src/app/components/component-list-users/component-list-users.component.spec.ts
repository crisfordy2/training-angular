import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListUsersComponent } from './component-list-users.component';

describe('ComponentListUsersComponent', () => {
  let component: ComponentListUsersComponent;
  let fixture: ComponentFixture<ComponentListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentListUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
