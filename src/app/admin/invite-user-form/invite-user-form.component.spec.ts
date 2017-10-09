import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserFormComponent } from './invite-user-form.component';

describe('InviteUserFormComponent', () => {
  let component: InviteUserFormComponent;
  let fixture: ComponentFixture<InviteUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
