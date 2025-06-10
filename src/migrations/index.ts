import * as migration_20250610_101644 from './20250610_101644';

export const migrations = [
  {
    up: migration_20250610_101644.up,
    down: migration_20250610_101644.down,
    name: '20250610_101644'
  },
];
