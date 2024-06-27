import { ComponentFixture, TestBed } from '@angular/core/testing';
import {} from '@angular/fire/'
import { SubmittedContactFormsComponent } from './submitted-contact-forms.component';

describe('SubmittedContactFormsComponent', () => {
  let component: SubmittedContactFormsComponent;
  let fixture: ComponentFixture<SubmittedContactFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedContactFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedContactFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
