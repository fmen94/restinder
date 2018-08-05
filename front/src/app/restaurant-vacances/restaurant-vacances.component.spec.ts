import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantVacancesComponent } from './restaurant-vacances.component';

describe('RestaurantVacancesComponent', () => {
  let component: RestaurantVacancesComponent;
  let fixture: ComponentFixture<RestaurantVacancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantVacancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantVacancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
