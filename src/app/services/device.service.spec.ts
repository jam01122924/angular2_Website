import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DeviceService } from './device.service';

describe('Device Service', () => {
  beforeEachProviders(() => [DeviceService]);

  it('should ...',
      inject([DeviceService], (service: DeviceService) => {
    expect(service).toBeTruthy();
  }));
});
