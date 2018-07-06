import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendorFormComponent } from './create-vendor-form.component';

describe('CreateVendorFormComponent', () => {
  let component: CreateVendorFormComponent;
  let fixture: ComponentFixture<CreateVendorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVendorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVendorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
