<script>
  let value = 50;
  let showValue = false;
  let thumbPosition = 0;
  function updateValue(event) {
    value = event.target.value;
    thumbPosition = getThumbPosition(event.target);
  }
  function getThumbPosition(input) {
    const range = input.max - input.min;
    const position = ((input.value - input.min) / range) * 100;
    return position;
  }
</script>
<style>
  .range-slider {
    position: relative;
  }
  .range-slider input[type='range'] {
    width: 100%;
  }
  .range-slider .bubble {
    position: absolute;
    transform: translate(-50%, -100%);
    display: inline-block;
    background-color: #2196f3;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .range-slider .bubble.show {
    opacity: 1;
  }
</style>
<div class="range-slider">
  <input
    type="range"
    min="0"
    max="100"
    value="{value}"
    on:input="{updateValue}"
    on:mouseover="{() => (showValue = true)}"
    on:mouseout="{() => (showValue = false)}"
  />
  <span
    class="bubble"
    style="left: {thumbPosition}%"
    class:show="{showValue}"
  >
    {value}
  </span>
</div>