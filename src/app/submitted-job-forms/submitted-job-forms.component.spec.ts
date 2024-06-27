import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedJobFormsComponent } from './submitted-job-forms.component';

describe('SubmittedJobFormsComponent', () => {
  let component: SubmittedJobFormsComponent;
  let fixture: ComponentFixture<SubmittedJobFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedJobFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedJobFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
