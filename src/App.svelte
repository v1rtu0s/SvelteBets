<script>
  import { Card } from "svelte-chota";
  import Nav from "./lib/Nav.svelte";
  // import {activeTab} from "./lib/Nav.svelte";
    import {activeTab} from "./lib/store.js";
import Move from "./lib/Move.svelte";
    import Bets from "./lib/Bets.svelte";
    import Settings from "./lib/Settings.svelte";
    import Balance from "./lib/Balance.svelte";

  


  


 
</script>

<main>
  <div class="parent">
  <div class="div1"><Balance></Balance><Settings></Settings></div>
  <div class="div2"><Nav></Nav> </div>
  <div class="div3"> </div>
  <div class="div4"><Bets></Bets> </div>
  <div class="div5">
      
     {#if $activeTab === 'Limbo'}
      <p>Limbo</p>
    {:else if $activeTab === 'Dice'}
      <Card><Move></Move></Card>
    {:else if $activeTab === 'Diamonds'}
      <p> Diamonds</p>
    {:else if $activeTab === 'Wheel'}
     <p> Wheel</p>
    {/if}</div>
  <div class="div6">6 </div>
  <div class="div7">7 </div>

  


  
</main>

<style>
  @import url("../public/chota.css");
main {

background-color:grey;
}
  .parent {
    display: grid;
      
      

    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 0.5fr 9fr 0.5fr;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
  }
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
    background-color: #2C3333;
      padding: 1em;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
    background-color: #2C3333;
       padding: 1em;
  }
  .div3 {
    grid-area: 1 / 3 / 2 / 4;
    background-color: #2C3333;
       padding: 1em;
  }
  .div4 {
    grid-area: 2 / 1 / 3 / 2;
    background-color: #2C3333;
       padding: 1em;
  }
  .div5 {
    grid-area: 2 / 2 / 3 / 3;
    background-color: #2C3333;
       padding: 0.2em;
  }
  .div6 {
    grid-area: 2 / 3 / 3 / 4;
    background-color: #2C3333;
       padding: 1em;
  }
  .div7 {
    grid-area: 3 / 1 / 4 / 4;
    background-color: #2C3333;
       padding: 1em;
  }
p {

    color: white;
}
    
</style>
