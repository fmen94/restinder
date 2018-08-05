import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneVacancesComponent } from './one-vacances.component';

describe('OneVacancesComponent', () => {
  let component: OneVacancesComponent;
  let fixture: ComponentFixture<OneVacancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneVacancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneVacancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
