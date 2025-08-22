<script lang='ts'>
  let { src, widthSpan, heightSpan}: {src: string, widthSpan: number, heightSpan: number} = $props();
  let widthStyleString = $derived(`w-${widthSpan}`)
  let heightStyleString = $derived(`h-${heightSpan}`)
</script>

  <img alt="wedding" src={src} class={`${widthStyleString} ${heightStyleString}`}/>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position:50% 50%;
    border: 1px solid red;
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

  @media screen and (max-width:500px){
    .w-1,.w-2,.w-3{
        grid-column:span 1;
    }
    .h-3{
        grid-column:span 2;
    }
  }
</style>