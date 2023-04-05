<script>

   import {balance} from './store.js' ;
    import {Icon, Button} from 'svelte-chota';
    import {mdiCurrencyUsd} from '@mdi/js';
    
</script>

<main>

    <div class="wrapper">
       
<!--         <div class="balance">{$balance}<Icon src={mdiCurrencyUsd} color="grey" size="1.5"/></div>  -->
<div class="balance">
       <Button outline primary iconRight={mdiCurrencyUsd}>{$balance}</Button></div>
    </div>

    
</main>

<style>

  .wrapper {

      position: relative;
      float: left;
      margin: 0.2rem;
      color:aliceblue;
  }  
    
</style>