<script>
import {generateFloats} from './Utils.js';

import {writable, readable} from 'svelte/store';
  import { BetStore } from './store.js';

var verify = [];
var endresult2 = 0;
var endresult_dice = writable('0');
    
verify = generateFloats($BetObject);
$: verify = generateFloats($BetObject);   
      


  const updateBetObject = () => {
    BetStore.update(betObject => {
      return {
        ...betObject,
        ServerSeed: 456,
        ClientSeed: 789,
        nonce: 2,
        cursor: 2,
        count: 7
      };
    });
  };
</script>




export function bet_dice() {
 endresult = verify[0] * 10001;
      endresult2 = Math.trunc(endresult) / 100;
      console.log(endresult2);
    let endresult3 = endresult2.toString;
    // endresult_dice.set(endresult3);
    return endresult2;
    
    
}    
   

    
     
</script>

<main>
<p>{bet_dice}</p>
    
</main>

<style>

    
</style>