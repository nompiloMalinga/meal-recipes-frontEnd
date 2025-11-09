import { TestBed } from '@angular/core/testing';

import { MealListService } from './meal-list-service';

describe('MealListService', () => {
  let service: MealListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
