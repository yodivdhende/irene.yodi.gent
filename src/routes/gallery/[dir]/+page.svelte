<script lang='ts'>
  import Gallery from "$lib/components/gallery.svelte";
  let {data} = $props();
  let dir = $derived(data.dir);
</script>

<Gallery {dir} />