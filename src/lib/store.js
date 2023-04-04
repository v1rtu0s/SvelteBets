import { writable } from 'svelte/store';
export const activeTab = writable('test');
export const rangeValue = writable('50.00');
export const floats = writable('0');
export const bytes = writable('0')

const BetObject = {
  ServerSeed: 123,
  ClientSeed: 123,
  nonce: 1,
  cursor: 1,
  count: 6
};

export const BetStore = writable(BetObject);