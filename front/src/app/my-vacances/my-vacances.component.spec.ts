import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVacancesComponent } from './my-vacances.component';

describe('MyVacancesComponent', () => {
  let component: MyVacancesComponent;
  let fixture: ComponentFixture<MyVacancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVacancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVacancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
