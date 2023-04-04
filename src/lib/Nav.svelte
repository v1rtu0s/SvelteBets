<script>
  import { writable } from 'svelte/store';
    import {activeTab} from './store.js'


  function handleClick(tab) {
    activeTab.set(tab);
      console.log($activeTab);
  }
</script>

<nav>
  <a class:active={$activeTab === 'Limbo'} href="#" on:click={() => handleClick('Limbo')}>Limbo</a>
  <a class:active={$activeTab === 'Dice'} href="#" on:click={() => handleClick('Dice')}>Dice</a>
  <a class:active={$activeTab === 'Diamonds'} href="#" on:click={() => handleClick('Diamonds')}>Diamonds</a>
  <a class:active={$activeTab === 'Wheel'} href="#" on:click={() => handleClick('Wheel')}>Wheel</a>
</nav>

<style>
  .active {
    color: orange;
    font-weight: bold;
  }
</style>
