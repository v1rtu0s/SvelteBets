
  import {writable} from 'svelte/store';  
var ServerSeed = "123";
var ClientSeed = "123";
var nonce = 1;
var cursor = 0;
var count = 6;

var BetObject {
    ServerSeed: ServerSeed;
ClientSeed: ClientSeed;
nonce: 1;
cursor: 0;
count: 6;

} = writable("Serverseed: ServerSeed)

// import crypto from "crypto";

export function generateBytes({ ServerSeed, ClientSeed, nonce, cursor, count }) {
    // Setup cursor variables
    let currentRound = Math.floor(cursor / 32);
    let currentRoundCursor = cursor;
    currentRoundCursor -= currentRound * 32;
    // Generate bytes until count is fulfilled
    const bytes = [];
    while (bytes.length < count) {
      // HMAC function used to output provided inputs into bytes
      const hmac = crypto.createHmac("sha256", ServerSeed);
      hmac.update(`${ClientSeed}:${nonce}:${currentRound}`);
      const buffer = hmac.digest();
      // Update cursor for next iteration of loop
      while (currentRoundCursor < 32 && bytes.length < count) {
        bytes.push(buffer[currentRoundCursor]);
        currentRoundCursor += 1;
      }
      currentRoundCursor = 0;
      currentRound += 1;
    }
    console.log("bytes:", bytes);
    return bytes;
  }

  
  export function generateFloats({ ServerSeed, ClientSeed, nonce, cursor, count }) {
    const bytes = generateBytes({
      ServerSeed,
      ClientSeed,
      nonce,
      cursor,
      count: count * 4
    });
    // Convert bytes to floats
    const floats = [];
    for (let i = 0; i < bytes.length; i += 4) {
      let partial = 0;
      for (let j = 0; j < 4; j++) {
        partial += bytes[i + j] / 256 ** (j + 1);
      }
      floats.push(partial);
    }
    console.log("floats:", floats);
    return floats;
  }

