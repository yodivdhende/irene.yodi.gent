<script lang='ts'>
  let { src, randomNumbers}: {src: string, width: number, height: number, randomNumbers: number[]} = $props();

  let img: {onload: () => void, width:number, height: number}
  let width: number = $state(0);
  let height: number = $state(0);

  img.onload = function(){
    width = img.width
    height = img.height
  }


  let spans = $derived(getSpans({width, height}));
  let widthStyleString = $derived(`w-${spans.width}`)
  let heightStyleString = $derived(`h-${spans.height}`)


  function getSpans({width, height}: {width: number, height: number}){
    const firstRandomNumber = randomNumbers[Math.round(Math.random() * randomNumbers.length)];
    const secondRandomNumber = randomNumbers[Math.round(Math.random() * randomNumbers.length)];
    const bigRandomNumber = firstRandomNumber >= secondRandomNumber ? firstRandomNumber : secondRandomNumber;
    const smallRandomNumber = firstRandomNumber >= secondRandomNumber ? secondRandomNumber: firstRandomNumber;
    return {
      width: width > height ? bigRandomNumber : smallRandomNumber ,
      height: height > width ? bigRandomNumber: smallRandomNumber,
    }
  }
</script>

  <img alt="wedding" src={src} bind:this={img} class={`${widthStyleString} ${heightStyleString}`}/>

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