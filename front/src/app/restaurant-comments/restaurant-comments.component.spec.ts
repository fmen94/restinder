import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCommentsComponent } from './restaurant-comments.component';

describe('RestaurantCommentsComponent', () => {
  let component: RestaurantCommentsComponent;
  let fixture: ComponentFixture<RestaurantCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
