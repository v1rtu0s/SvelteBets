<script>
 import { Modal, Button, Card } from 'svelte-chota';
 import { writable } from 'svelte/store';

 import { mdiCog, mdiClose } from '@mdi/js';

export var ServerSeed = 'test';
export var ClientSeed = 'test';
export var nonce = 1;

    



    
 let modal_open = false;
 const modal_show = event => modal_open = true;
 const modal_hide = event => modal_open = false;
    
</script>

<div class="wrapper"><Button clear icon={mdiCog}  size={1}  on:click={modal_show}></Button>
<Modal bind:open={modal_open}>
    <Card>
        <h4 slot="header">Provably Fair</h4>
<Card>
    <div class="wrapper2">
        <p class="beschreibung">ServerSeed</p>
       <input type="text" disabled class="inputfeld" bind:value={ServerSeed} placeholder="ServerSeed"></div>
       
<div class="wrapper2">
    <p class="beschreibung">ClientSeed</p>
    <input type="text" class="inputfeld" bind:value={ClientSeed} placeholder="ClientSeed"></div>
    <div class="wrapper2">
        <p class="beschreibung">Nonce</p>
       <input type="number" disabled bind:value={nonce} placeholder="nonce"></div>
</Card>
        
        <div slot="footer" class="is-right">
            <Button icon={mdiClose} clear on:click={modal_hide}></Button>
            
        </div>
    </Card>
</Modal>
</div>
<style>
.wrapper {

position: relative;
  float: right;
    
}
.beschreibung {

font-size:12px;
    font-weight: 400;
       text-transform: uppercase;
margin-bottom: -3px;
    
}
.inputfeld {

    margin-top:8px;
    margin-bottom: 4px;
}
    
    
</style>