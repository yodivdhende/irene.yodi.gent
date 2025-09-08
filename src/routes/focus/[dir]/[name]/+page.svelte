<script lang='ts'>
	import ImageView from '$lib/components/image-view.svelte';

  let {data} = $props();
  let dir = $derived(data.dir);
  let name = $derived(data.name);

</script>

<ImageView data={{dir, name}} />

