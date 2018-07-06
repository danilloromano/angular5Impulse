import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2colComponent } from './form2col.component';

describe('Form2colComponent', () => {
  let component: Form2colComponent;
  let fixture: ComponentFixture<Form2colComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form2colComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2colComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
