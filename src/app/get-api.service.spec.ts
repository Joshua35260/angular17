/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetApiService } from './get-api.service';

describe('Service: GetApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetApiService]
    });
  });

  it('should ...', inject([GetApiService], (service: GetApiService) => {
    expect(service).toBeTruthy();
  }));
});
