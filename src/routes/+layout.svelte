<script lang="ts">
	import '../reset.css';
	import favicon from '$lib/assets/favicon/favicon.svg';
	import favicon96 from '$lib/assets/favicon/favicon-96x96.png';
	import faviconIco from "$lib/assets/favicon/favicon.ico";
	import faviconApple from "$lib/assets/favicon/apple-touch-icon.png";
	import ImageView from '$lib/components/image-view.svelte';
	import  manifest from '$lib/assets/favicon/site.webmanifest';
	import { focusImageService } from '$lib/services/image-focus.svelte';

	let focusImage = $derived(focusImageService.focusImage);
	let dir = $derived(focusImage?.dir);
	let name = $derived(focusImage?.name);
	let noScrollClass = $derived.by(() => {
		if (dir && name) return 'no-scroll';
		return '';
	});
	let { children } = $props();

	$effect(() => {
		if (focusImage == null) setBodyScroll(true);
		if (dir && name) setBodyScroll(false);
	});

	function setBodyScroll(value: boolean) {
		if (value) window.document.body.classList.remove('no-scroll');
		else window.document.body.classList.add('no-scroll');
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="shortcut icon" href={faviconIco} />
	<link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
	<link rel="manifest" href={manifest} />
</svelte:head>

{#if dir && name}
	<div class="focus-hover">
		<ImageView data={{ dir, name }} />
	</div>
{/if}
<main class={noScrollClass}>
	{@render children?.()}
</main>

<style>
	main {
		overflow: scroll;
	}

	.focus-hover {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.8);
	}

	:global(body.no-scroll) {
		overflow: hidden;
	}
</style>
