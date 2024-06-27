import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferDialogComponent } from './job-offer-dialog.component';

describe('JobOfferDialogComponent', () => {
  let component: JobOfferDialogComponent;
  let fixture: ComponentFixture<JobOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
