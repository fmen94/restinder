import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVacanceComponent } from './new-vacance.component';

describe('NewVacanceComponent', () => {
  let component: NewVacanceComponent;
  let fixture: ComponentFixture<NewVacanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVacanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVacanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
