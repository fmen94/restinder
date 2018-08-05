import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantInterviewsComponent } from './restaurant-interviews.component';

describe('RestaurantInterviewsComponent', () => {
  let component: RestaurantInterviewsComponent;
  let fixture: ComponentFixture<RestaurantInterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantInterviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
