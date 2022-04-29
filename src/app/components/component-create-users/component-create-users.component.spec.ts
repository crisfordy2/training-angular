import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCreateUsersComponent } from './component-create-users.component';

describe('ComponentCreateUsersComponent', () => {
  let component: ComponentCreateUsersComponent;
  let fixture: ComponentFixture<ComponentCreateUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCreateUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
