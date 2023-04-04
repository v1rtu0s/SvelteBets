<script>
  import { onMount } from "svelte";
  let rangeValue = 0;
  let triangleWidth = 40;
  let triangleHeight = 10;
  let triangle;
  onMount(() => {
    updateTrianglePosition();
  });
  function updateTrianglePosition() {
    triangle.style.left = `calc(${rangeValue}% - ${triangleWidth / 2}px)`;
  }
</script>
<style>
  .triangle-container {
    position: relative;
  }
  .triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid black;
/*     border-top:10px solid black; */
    position: absolute;
    bottom: 0;
  }
  input[type="range"] {
    width: 100%;
  }
  .viewBox {

position: relative;
    margin-bottom: -19px;
    
  }

  .Zahlen {

    color:#4324cc;
  }

  datalist {
  display: flex;
  justify-content: space-between;
  color: grey;
    margin-top:-10px;
    font-size:11px;
}
</style>
<div class="triangle-container">
   
  
<div class="Zahlen"></div>

   <svg class="viewBox" viewBox="0 0 500 500" width="40px" height="40px"  xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com" bind:this="{triangle}">
  <defs></defs>
  <path d="M 246.677 6.439 L 456.655 127.67 L 456.655 370.132 L 246.677 491.363 L 36.699 370.132 L 36.699 127.67 Z" style="stroke: rgb(0, 0, 0); fill: rgb(196, 196, 196);" bx:shape="n-gon 246.677 248.901 242.462 242.462 6 0 1@dbe50443"></path>
</svg>

  <input
    list="list"
    type="range"
    min="0.00"
    max="100.00"
    bind:value="{rangeValue}"
    on:input="{updateTrianglePosition}"/>

  <datalist id="list">
  <option value="0" label="0"></option>
  <option value="25" label="25"></option>
  <option value="50" label="50"></option>
  <option value="75" label="75"></option>
  <option value="100" label="100"></option>
</datalist>
 
</div>
