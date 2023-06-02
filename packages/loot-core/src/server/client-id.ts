import * as uuid from '../platform/uuid';

export function makeClientId() {
  return uuid.v4Sync().replace(/-/g, '').slice(-16);
}
