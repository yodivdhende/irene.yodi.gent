<script lang="ts">
	import homeTitleImage from '$lib/assets/home-title.png';

	let { children } = $props();
</script>


<div class="background">
	<img alt="Irene & Yodi title" src={homeTitleImage} />
</div>
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

</style>