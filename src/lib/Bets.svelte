<script>
import { Card, Button, Input } from "svelte-chota";
import { mdiCurrencyUsd } from '@mdi/js';
</script>

<main>
    <div class="labelbet">Bet amount</div>
    
    <p><input type="number" placeholder="0.00" number value="" min="0.00001" max="10000"/></p>
    <div class="labelbet">Profit on win</div>
   <div class="input-field">
       
       <input type="number" disabled placeholder="0.00" value="" min="0.00001" max="10000"/></div>
    <button class="buttonbet" style="width: auto">BET</button>
</main>

<style>
     @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
 .input-field {
    position: relative;
  }
input {


     padding-left: 30px;
}
   .buttonbet {
       margin-top:18px;
       background-color: lightgreen;
      color: black;
   }
.labelbet {

font-weight: 300;
    font-size: 10px;
    text-transform: uppercase;
    color: ghostwhite;

}

    
</style>