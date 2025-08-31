<script lang='ts'>
	import { ChevronLeft, ChevronRight, CircleX } from '@lucide/svelte';

  let {data} = $props();
</script>

<main>
  <div class="arrow" style="grid-area: left">
    <ChevronLeft />
  </div>
  <div class="image">
    <img alt="wedding" src={data.imageUrl}>
  </div>
  <div class="close">
    <CircleX />
  </div>
  <div class="arrow" style="grid-area: right">
    <ChevronRight />
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: min-content 1fr min-content ;
    grid-template-rows: 1fr auto ;
    grid-template-areas: 
      "left img right"
      "left close right"
    ;
    background-color: hsl(110, 10%, 10%);
  }

  .image {
    width: 100%;
    align-self: center;
    justify-self: center;
    grid-area: img;
  } 
  .image img {
    width: 100%;
    border-radius: 2em;
  }

  .arrow {
    align-self: center;
    color: silver;
    align-items: center;
    padding: 30% 0.5em;
    margin: 0.5em;
    border-radius: 0.5em;
  }

  .arrow:hover {
    color: black;
    background-color: rgba(255,255,255,0.8);
  }

  .close {
    grid-area: close;
    justify-self: center;
    align-self: center;
    color: silver;
    align-items: center;
    padding: 0.5em 30%;
    border-radius: 0.5em;
  }

  .close:hover {
    color: black;
    background-color: rgba(255,255,255,0.8);
  }

</style>
