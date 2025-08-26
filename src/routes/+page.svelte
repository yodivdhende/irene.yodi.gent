<script lang="ts">
	import homeTitleImage from '$lib/assets/home-title.png';
	import type { Image } from '$lib/assets/server/image-fetcher';
	import ImagePreview from '$lib/components/image-preview.svelte';
	import { onMount } from 'svelte';

	const randomNumbers: number[] = [1, 1, 1, 2, 2, 3];
	const pageCount: number = 0;
	let images: Image[] = $state([]);
  
  onMount(()=>{
    getNewImages(pageCount).then((newImages) => newImages ? images = [...images, ...newImages] : undefined);
  })

	async function getNewImages(page: number): Promise<Image[] | undefined>  {
		try {
			const response = await fetch('api/20250801', {
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

<div class="background">
	<img alt="Irene & Yodi title" src={homeTitleImage} />
</div>
<main>
	<div class="title-placeholder"></div>
	<div class="gallery">
		{#each images as image }
			<ImagePreview name={image.name}  {randomNumbers}/>
		{/each}
	</div>
</main>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.background {
		position: fixed;
		top: 0;
		z-index: -1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: hsl(42, 15, 95);
	}

	.title-placeholder {
		width: calc(100vw - 1px);
		height: calc(100vh - 1px);
		overflow: hidden;
	}

	.gallery {
		width: calc(100% - 2em);
		height: 100%;
		padding: 1em;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-auto-rows: 400px 200px;
		grid-gap: 1em;
		grid-auto-flow: dense;
		background-color: hsl(95 50% 90%);
	}

	@media screen and (max-width: 500px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
