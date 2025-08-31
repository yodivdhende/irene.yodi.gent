<script lang='ts'>
	import type { Image } from "$lib/assets/server/image-fetcher";
	import { onMount } from "svelte";
	import ImagePreview from "./image-preview.svelte";

  let {  dir }: {dir: string} = $props();


  let images: Image[] = $state([])
	let pageCount: number = 0;
  let scrollY: number = $state(0);
  let innerHeight: number = $state(0); 

	onMount(() => {
		getNewImages(pageCount).then((newImages) =>
			newImages ? (images = [...images, ...newImages]) : undefined
		);
	});

	function onscroll() {
		if (scrollY + innerHeight >= document.documentElement.scrollHeight - 500) {
			pageCount += 1;
			getNewImages(pageCount).then((newImages) =>
				newImages ? (images = [...images, ...newImages]) : undefined
			);
		}
	}

	async function getNewImages(page: number): Promise<Image[] | undefined> {
		try {
			const response = await fetch(`/api/${dir}`, {
				method: 'POST',
				body: JSON.stringify({ page })
			});
			if (!response.ok) throw new Error(`image request status: ${response.status}`);
			const result = await response.json();
			return result.images;
		} catch (error) {
			console.error(error);
		}
	}

</script>

<svelte:window bind:scrollY bind:innerHeight {onscroll} />
<main>
  {#each images as image}
    <ImagePreview name={image.name} {dir}/>
  {/each}
</main>

<style>
  main {
		width: calc(100% - 2em);
		height: 100%;
		padding: 1em;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-auto-rows: 300px 200px;
		grid-gap: 1em;
		grid-auto-flow: dense;
		background-color: hsl(95 50% 90%);
  }

	@media screen and (max-width: 500px) {
		main {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>