<script lang="ts">
	import HomeBackground from '$lib/components/home-background.svelte';

	let { children } = $props();
</script>


<HomeBackground />
<main>
	<div class="title-placeholder"></div>
	<div>
		{@render children?.()}
	</div>
</main>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.title-placeholder {
		width: calc(100vw - 1px);
		height: calc(100vh - 1px);
		overflow: hidden;
	}

</style>