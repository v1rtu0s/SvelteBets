import { writable } from 'svelte/store';
import {ServerSeed, ClientSeed, nonce } from './Settings.svelte';


export const activeTab = writable('test');
export const rangeValue = writable('50.00');

export const balance = writable('100.00');

var count = 5;
var cursor = 0;


export const BetObject =  {
    ServerSeed: ServerSeed,
    ClientSeed: ClientSeed,
    nonce: nonce,
    cursor: cursor,
    count: count



}