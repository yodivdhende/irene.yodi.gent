<script lang="ts">
	import { focusImageService } from '$lib/services/image-focus.svelte';

	let { name, dir }: { name: string; dir: string } = $props();

	const randomNumbers: number[] = [1, 1, 1, 2, 2, 3];

	let img: HTMLImageElement | undefined = $state(undefined);
	let width: number = $state(300);
	let height: number = $state(200);

	$effect(() => {
		if (img != null) {
			img.onload = function () {
				width = img.width;
				height = img.height;
			};
		}
	});

	let spans = $derived(getSpans({ width, height }));
	let widthStyleString = $derived(`w-${spans.width}`);
	let heightStyleString = $derived(`h-${spans.height}`);

	function getSpans({ width, height }: { width: number; height: number }) {
		//TODO the width and the height doesnt seem to be the widht the original image
		const firstRandomNumber = randomNumbers[Math.round(Math.random() * (randomNumbers.length - 1))];
		const secondRandomNumber =
			randomNumbers[Math.round(Math.random() * (randomNumbers.length - 1))];
		const bigRandomNumber =
			firstRandomNumber >= secondRandomNumber ? firstRandomNumber : secondRandomNumber;
		const smallRandomNumber =
			firstRandomNumber >= secondRandomNumber ? secondRandomNumber : firstRandomNumber;

		return {
			width: bigRandomNumber,
			height: smallRandomNumber
		};
	}

	function setFocusImage() {
    focusImageService.setFocusImage({dir, name});
	}

</script>

{#await import(/*@vite-ignore*/ `../assets/images/${dir}/${name}`)}
	<div class="placeholder"></div>
{:then src}
	<button onclick={setFocusImage} class={`${widthStyleString} ${heightStyleString}`}>
		<img alt="wedding" src={src.default} bind:this={img} />
	</button>
{/await}

<style>
	.placeholder {
		width: 300px;
		height: 200px;
		background-color: silver;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
		border-radius: 2em;
	}

	.w-1 {
		grid-column: span 1;
	}
	.w-2 {
		grid-column: span 2;
	}
	.w-3 {
		grid-column: span 3;
	}
	.h-1 {
		grid-row: span 1;
	}
	.h-2 {
		grid-row: span 2;
	}
	.h-3 {
		grid-row: span 3;
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

	@media screen and (max-width: 650px) {
		.w-1,
		.w-2,
		.w-3 {
			grid-column: span 1;
		}
		.h-3 {
			grid-column: span 2;
		}
	}
</style>
