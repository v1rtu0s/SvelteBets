<script>

import {generateFloats} from './Utils.svelte';

export function dice_resulting() {

let result = Math.trunc(generateFloats[0] * 10001) / 100;
  console.log(result);
  return result;
  
}


  
</script>




      console.log("dicepath", game);
      let endresult = verify[0] * 10001;
      let endresult2 = Math.trunc(endresult) / 100;
      console.log(endresult2);
      return endresult2;
