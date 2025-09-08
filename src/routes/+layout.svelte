<script lang='ts'>
	import '../reset.css';
	import favicon from '$lib/assets/favicon.svg';
	import ImageView from '$lib/components/image-view.svelte';
	import { focusImageService } from '$lib/services/image-focus.svelte';
	
	let focusImage= $derived(focusImageService.focusImage);
	let dir = $derived(focusImage?.dir);
	let name = $derived(focusImage?.name);
	let noScrollClass = $derived.by(() => {
		if(dir && name) return 'no-scroll';
		return ''
	})



	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if dir && name}
	<div class="focus-hover">
		<ImageView data={{dir, name }} />
	</div>
{/if}
<main class={noScrollClass}>
	{@render children?.()}
</main>

<style>
	main{
		overflow: scroll;
	}
	.focus-hover{
		position: fixed;
		top:0;
		left:0;
		background-color: rgba(0,0,0,0.8);
	}

	.no-scroll {
		overflow:hidden
	}
</style>