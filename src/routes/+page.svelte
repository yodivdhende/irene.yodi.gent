<script lang="ts">
	import homeTitleImage from '$lib/assets/home-title.png';
	import ImagePreview from '$lib/components/image-preview.svelte';


  const randomNumbers: number[] = [1,1,1,2,2,3];

  function getRandomDimentions(){
    const randomFactor = Math.floor(Math.random()*2);
    if(randomFactor % 2 ) {
      return {width: 200, height: 300};
    }
    return {width: 300, height: 200};
  }

  function getRandomUrl({width, height}: {width: number, height: number}) {
    return `https://picsum.photos/${width}/${height}`;
  }

  function getRandomImage() {
    const dimention =getRandomDimentions();
    return {
      src: getRandomUrl(dimention),
      width: dimention.width,
      height: dimention.height,
      randomNumbers: randomNumbers,
    }

  }

</script>

<div class="background">
	<img alt="Irene & Yodi title" src={homeTitleImage} />
</div>
<main>
	<div class="title-placeholder"></div>
	<div class="images">
    {#each {length: 15} }
      <ImagePreview {...getRandomImage()} />
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

	.images {
    width: calc(100% - 2em);
    height: 100%;
    padding: 1em;
    display:grid;
    grid-template-columns: repeat(6,1fr);
    grid-auto-rows: 400px 200px;
    grid-gap: 1em;
    grid-auto-flow: dense;
		background-color: aliceblue;
	}

  @media screen and (max-width:500px){
    .images {
        grid-template-columns: repeat(2,1fr);
    }
  }

</style>
