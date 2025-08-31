<script lang='ts'>
	import { goto } from '$app/navigation';
	import { ChevronLeft, ChevronRight, CircleX } from '@lucide/svelte';

  let {data} = $props();

  function close() {
    goto(`/gallery/${data.dir}`)
  }

  async function gotoNext() {
    fetch(`/api/${data.dir}/next`, {
      method: 'POST',
      body: JSON.stringify({ name: data.name }),
    }).then(async response => {
      if(response.ok === false) return;
      const {name: nextImage} = await response.json();
      if(typeof nextImage !== 'string') return;
      goto(`/focus/${data.dir}/${nextImage}`)
    });
  }
  async function gotoPrevious() {
    fetch(`/api/${data.dir}/previous`, {
      method: 'POST',
      body: JSON.stringify({ name: data.name }),
    }).then(async response => {
      if(response.ok === false) return;
      const {name: previousImage} = await response.json();
      if(typeof previousImage !== 'string') return;
      goto(`/focus/${data.dir}/${previousImage}`)
    });

  }
</script>

<main>
  <button class="arrow" style="grid-area: left" onclick={gotoPrevious}>
    <ChevronLeft />
  </button>
  <div class="image">
    <img alt="wedding" src={data.imageUrl}>
  </div>
  <button class="close" onclick={close}>
    <CircleX />
  </button>
  <button class="arrow" style="grid-area: right" onclick={gotoNext}>
    <ChevronRight />
  </button >
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
    background-color: none;
  }

  .close:hover {
    color: black;
    background-color: rgba(255,255,255,0.8);
  }

  button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

</style>
